using Cheers.Models;
using Cheers.Models.Interfaces;
using Cheers.Services.EmailService;
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

        [HttpGet]
        public string Ana()
        {
            return "Anare mrere";
        }

        [HttpPost]
        [Route("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] SignUpModel signUpModel)
        {
            var model = await _accountRepository.SignUpAsync(signUpModel);
            if (model.Succeeded)
            {
                //_emailService.SendEmail(new UseExtensions()..);
                return Ok(model.Succeeded);
            }
            return Unauthorized("De ce nu merge?");
        }

        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> LogIn([FromBody] SingnInModel signUpModel)
        {
            var logInResopnse = await _accountRepository.LogInAsync(signUpModel);
            if (string.IsNullOrEmpty(logInResopnse))
            {
                return Unauthorized();
            }
            return Ok(logInResopnse);
        }
    }
}
