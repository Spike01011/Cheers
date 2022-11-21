using Cheers.Models;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Cheers.Controllers
{
    public class OrderController : ControllerBase
    {
        private readonly IOrderDao _orderDao;
        private readonly IAccountRepository _accountRepository;

        public OrderController(IOrderDao orderDao, IAccountRepository accountRepository)
        {
            _orderDao = orderDao;
            _accountRepository = accountRepository;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddOrder([FromBody] Order order)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            Console.WriteLine(order.ClientSecret + " ANA ARE MERER");
            Console.WriteLine(order.PaymentIntentId + " ANA ARE MERER");

            if (identity != null)
            {
                var clm = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(clm);
                order.Author = user;
                _orderDao.AddAna(order).Wait();
            }
            else return BadRequest("Add Order Faild");

            return Ok("OrderAdded Succesfull: " + JsonConvert.SerializeObject(order));


            //ClaimsIdentity? identity = HttpContext.User.Identity as ClaimsIdentity;
            //if (HttpContext.User.Identity is ClaimsIdentity identity)
            //{
            //    var clm = identity.FindFirst(ClaimTypes.Email);
            //    if (clm != null)
            //    {
            //var user = await _accountRepository.GetByMail(clm.Value);
            //order.Author = user;
            //_orderDao.Add(order);
            //    }
            //    else return BadRequest("Add Order Faild");
            //}
            //return Ok("OrderAdded Succesfull: " + JsonConvert.SerializeObject(order));
        }
    }
}
