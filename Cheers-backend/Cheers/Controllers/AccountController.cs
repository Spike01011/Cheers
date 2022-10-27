using Cheers.Models;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Route("account")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountRepository _accountRepository;

        public AccountController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
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
            return Ok(logInResopnse);
        }
    }
}
