using Cheers.Models;
using Cheers.Services.EmailService;
using Cheers.Services.PaymentService;
using Cheers.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    public class PaymentController : Controller
    {
        private readonly IPaymentService _paymentService;
        private readonly IEmailService _emailService;

        public PaymentController(IPaymentService paymentService, IEmailService emailService)
        {
            _paymentService = paymentService;
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> PayIdea([FromBody] Order order)
        {

            Console.WriteLine("------------");
            Console.WriteLine(" Total: " + order.Total);
            Console.WriteLine("------------");
            if (order == null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            //var intent = await _paymentService.IsPaymentWorking(); // For Testing
            if (intent == null) return BadRequest(
                new ProblemDetails { Title = "Creating Payment Intent Problem" });
            order.PaymentIntentId ??= intent.Id;
            order.ClientSecret ??= intent.ClientSecret;

            Console.WriteLine("------------");
            Console.WriteLine(" Total: " + order.Total);
            Console.WriteLine(" Tip: " + order.TipAmount);
            Console.WriteLine("PaymentIntentId: " + order.PaymentIntentId);
            Console.WriteLine(" ClientSecret: " + order.ClientSecret);
            Console.WriteLine("StripeClientSecret: " + intent.ClientSecret);
            Console.WriteLine("------------");

            _emailService.SendEmail("cristianbalan2021@gmail.com", Statics.GetPaymentEmailSubject(), Statics.GetEmailPaymentMessage());
            return Ok("RawPaymentJObject: " + intent.RawJObject);
        }
    }
}
