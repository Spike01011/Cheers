using Microsoft.AspNetCore.Identity;

namespace Cheers.Models.Interfaces
{
    public interface IAccountRepository
    {
        Task<IdentityResult> SignUpAsync(SignUpModel signUpModel);
        Task<string?> LogInAsync(SingnInModel signInModel);
        public List<string> GetRolesForUser(ApplicationUser user);
        Task LogOutAsync();
        public Task<ApplicationUser> GetByMail(string email);
    }
}