using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Cheers.Models
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountRepository(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration,
            RoleManager<IdentityRole> roleManager
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _roleManager = roleManager;
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel signUpModel)
        {
            var user = new ApplicationUser()
            {
                Email = signUpModel.Email,
                UserName = signUpModel.UserName,
            };
            return await _userManager.CreateAsync(user, signUpModel.Password);
        }

        public async Task<string?> LogInAsync(SingnInModel signInModel)
        {
            var result = await _signInManager.PasswordSignInAsync(signInModel.Email, signInModel.Password, false, false);

            if (!result.Succeeded)
            {
                return null;
            }

            ApplicationUser user = await _userManager.FindByEmailAsync(signInModel.Email);
            var roles = await _userManager.GetRolesAsync(user);

            var authorClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, signInModel.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            foreach (var role in roles)
            {
                var roleClaim = new Claim(ClaimTypes.Role, role);
                authorClaims.Add(roleClaim);
            }


            var authKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIuser"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddDays(1),
                claims: authorClaims,
                signingCredentials: new SigningCredentials(authKey, SecurityAlgorithms.HmacSha256Signature));

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task LogOutAsync()
        {
            _signInManager.SignOutAsync().Wait();
        }

        public async Task<ApplicationUser> GetByMail(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public List<string> GetRolesForUser(ApplicationUser user)
        {
            return _userManager.GetRolesAsync(user).Result.ToList();
        }
    }
}
