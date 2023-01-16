using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Cheers.Services.EmailService;
using Cheers.Services.PaymentService;
using Cheers.Utils;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Cheers.Controllers
{
    public class PaymentController : Controller
    {
        private readonly IPaymentService _paymentService;
        private readonly IEmailService _emailService;
        private readonly IOrderDao _orderDao;
        private readonly IAccountRepository _accountRepository;

        public PaymentController(IPaymentService paymentService, IEmailService emailService, IOrderDao orderDao, IAccountRepository accountRepository)
        {
            _paymentService = paymentService;
            _emailService = emailService;
            _orderDao = orderDao;
            _accountRepository = accountRepository;
        }
        
        [HttpPost]
        public async Task<IActionResult> PayIdeaAna([FromBody] Order order)
        {
            ClaimsIdentity? identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var clm = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(clm);
                order.Author = user;

            }
            else return BadRequest("Add Order Faild");

            if (order == null) return NotFound();

            var intent = await _paymentService.CreateOrUpdatePaymentIntent(order);
            
            if (intent == null)
            {
                return BadRequest(new ProblemDetails { Title = "Creating Payment Intent Problem" });
            }
            order.Total = order.Total / 100;
            order.PaymentIntentId = intent.Id;
            order.ClientSecret = intent.ClientSecret;
            _orderDao.Add(order);

            //_emailService.SendEmail("cristianbalan2021@gmail.com", Statics.GetPaymentEmailSubject(), Statics.GetEmailPaymentMessage());
            return Ok(intent.RawJObject);
        }
    }
}
