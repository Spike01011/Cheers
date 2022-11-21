using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Cheers.Models.Daos
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountRepository(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration,
            RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _roleManager = roleManager;
        }

        //private async void Setup()
        //{
        //    IdentityResult roleResult;
        //    string[] roleNames = { "Admin", "User" };
        //    foreach (var roleName in roleNames)
        //    {
        //        var roleExists = await _roleManager.RoleExistsAsync(roleName);
        //        if (!roleExists)
        //        {
        //            roleResult = await _roleManager.CreateAsync(new IdentityRole(roleName));
        //        }
        //    }
        //    var user = new ApplicationUser()
        //    {
        //        UserName = "admin@admin.admin",
        //        Email = "admin@admin.admin",
        //    };
        //    string userPwd = "Admin.1234";
        //    await CreateUser(user, userPwd);
        //}

        private async Task CreateUser(ApplicationUser user, string pass)
        {
            var checkUser = await _userManager.FindByEmailAsync(user.Email);
            if (checkUser == null)
            {
                var createUser = await _userManager.CreateAsync(user, pass);
                if (createUser.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "Admin");
                }
            }
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel signUpModel)
        {
            //var isSetup = await _roleManager.RoleExistsAsync("Admin");
            //if (!isSetup)
            //{
            //    Setup();
            //}
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

            var authorClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, signInModel.Email),
                new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

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
    }
}
