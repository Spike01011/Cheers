using Cheers.Models;
using Cheers.Models.Interfaces;
using Cheers.Services.EmailService;
using Cheers.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Route("account")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IEmailService _emailService;

        public AccountController(IAccountRepository accountRepository, IEmailService emailService)
        {
            _accountRepository = accountRepository;
            _emailService = emailService;
        }

        [HttpPost]
        [Route("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] SignUpModel signUpModel)
        {
            var model = await _accountRepository.SignUpAsync(signUpModel);
            if (model.Succeeded)
            {
                _emailService.SendEmail(signUpModel.Email, Statics.GetEmailSignUpSubject(), Statics.GetEmaiSignUpBodyMessage());
                return Ok(model.Succeeded);
            }
            return Unauthorized("De ce nu merge?");
        }

        [HttpPost]
        [Route("LogIn")]
        public async Task<IActionResult> LogIn([FromBody] SingnInModel signUpModel)
        {
            var logInResopnse = await _accountRepository.LogInAsync(signUpModel);
            if (string.IsNullOrEmpty(logInResopnse))
            {
                return Unauthorized("LogIn Error");
            }

            var user = _accountRepository.GetByMail(signUpModel.Email).Result;
            var roles = _accountRepository.GetRolesForUser(user);
            Console.WriteLine("AAAAAAAAAAAA");
            foreach (var role in roles)
            {
                Console.WriteLine("AAAAAAAAAAAA" + role);
            }
            bool isAdmin = roles.Any(x => x == "Admin");

            return Ok(new LoginModel { Email = signUpModel.Email, Token = logInResopnse, IsAdmin = isAdmin });
        }

        [HttpGet]
        [Route("LogOut")]
        public async Task<IActionResult> LogOut()
        {
            _accountRepository.LogOutAsync().Wait();
            return Ok();
        }
    }
}
