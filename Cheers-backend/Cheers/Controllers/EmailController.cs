using Cheers.Models;
using Cheers.Services.EmailService;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Route("sendEmail")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public IActionResult SignUpSendEmailConfiramtion(EmailDto request)
        {
            _emailService.SendEmail(request);
            return Ok("Mail Send!");
        }
    }
}
