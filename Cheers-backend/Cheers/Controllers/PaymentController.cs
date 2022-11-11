using Cheers.Models;
using Cheers.Services.EmailService;
using Cheers.Services.PaymentService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Route("payment")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private IPaymentService _paymentService;
        private IEmailService _emailService;

        public PaymentController(IPaymentService paymentService, IEmailService emailService)
        {
            _paymentService = paymentService;
            _emailService = emailService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> PayIdeea([FromBody] Order order)
        {
            if (order ==  null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            if (intent == null) return BadRequest();
            
            _emailService.SendEmail("asd");
            return Ok("asda");
        }
    }
}
