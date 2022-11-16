using Cheers.Models;
using Cheers.Models.Interfaces;
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
        private readonly IOrderDao _orderDao;

        public PaymentController(IPaymentService paymentService, IEmailService emailService, IOrderDao orderDao)
        {
            _paymentService = paymentService;
            _emailService = emailService;
            _orderDao = orderDao;
        }

        [HttpPost]
        public async Task<IActionResult> PayIdea([FromBody] Order order)
        {
            var orderTest = _orderDao.GetAll().FirstOrDefault();

            if (order == null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            if (intent == null)
                return BadRequest(new ProblemDetails { Title = "Creating Payment Intent Problem" });

            order.PaymentIntentId = order.PaymentIntentId ?? intent.Id;
            order.ClientSecret = order.ClientSecret ?? intent.ClientSecret;

            _emailService.SendEmail("cristianbalan2021@gmail.com", Statics.GetPaymentEmailSubject(), Statics.GetEmailPaymentMessage());
            return Ok("RawPaymentJObject: " + intent.RawJObject);
        }

        public async Task<IActionResult> TestPayIdea([FromBody] Order order)
        {
            if (order == null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            //var intent = await _paymentService.IsPaymentWorking(); // For Testing
            if (intent == null) return BadRequest(
                new ProblemDetails { Title = "Creating Payment Intent Problem" });
            order.PaymentIntentId ??= intent.Id;
            order.ClientSecret ??= intent.ClientSecret;

            Console.WriteLine("------------");
            Console.WriteLine("Total: " + order.Total);
            Console.WriteLine("Tip: " + order.TipAmount);
            Console.WriteLine("PaymentIntentId: " + order.PaymentIntentId);
            Console.WriteLine("IntentPaymentIntentId: " + intent.Id);
            Console.WriteLine("OrderClientSecret: " + order.ClientSecret);
            Console.WriteLine("IntentStripeClientSecret: " + intent.ClientSecret);
            Console.WriteLine("------------");

            _emailService.SendEmail("cristianbalan2021@gmail.com", Statics.GetPaymentEmailSubject(), Statics.GetEmailPaymentMessage());
            return Ok("RawPaymentJObject: " + intent.RawJObject);
        }

        [HttpGet]
        public async Task<IActionResult> PayIdeaDao()
        {
            var order = _orderDao.GetAll().Last();
            if (order == null) return NotFound();

            Console.WriteLine("User.Identity.Name: " + User.Identity.Name);

            Console.WriteLine("------------");
            Console.WriteLine("Total: " + order.Total);
            Console.WriteLine("Tip: " + order.TipAmount);
            Console.WriteLine("PaymentIntentId: " + order.PaymentIntentId);
            Console.WriteLine("OrderClientSecret: " + order.ClientSecret);
            Console.WriteLine("------------");

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            if (intent == null)
                return BadRequest(new ProblemDetails { Title = "Creating Payment Intent Problem" });

            Console.WriteLine("intent.Id: " + intent.Id);
            Console.WriteLine("intent.ClientSecret: " + intent.ClientSecret);
            order.PaymentIntentId = intent.Id;
            order.ClientSecret = intent.ClientSecret;

            _orderDao.UpdateProduct(order);
            Console.WriteLine("After UpdateProduct");

            Console.WriteLine("------------");
            Console.WriteLine("PaymentIntentId: " + order.PaymentIntentId + "IntentPaymentIntentId: " + intent.Id);
            Console.WriteLine("OrderClientSecret: " + order.ClientSecret + "IntentStripeClientSecret: " + intent.ClientSecret);
            Console.WriteLine("------------");

            _emailService.SendEmail("cristianbalan2021@gmail.com", Statics.GetPaymentEmailSubject(), Statics.GetEmailPaymentMessage());
            return Ok("RawPaymentJObject: " + intent.RawJObject);
        }
    }
}
