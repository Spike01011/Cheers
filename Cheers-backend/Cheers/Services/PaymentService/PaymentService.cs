using Cheers.Models;
using Stripe;

namespace Cheers.Services.PaymentService
{
    public class PaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;
        public PaymentService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Order order)
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            PaymentIntentService service = new();
            
            PaymentIntent intent = new();
            long total = order.Total;
            if (string.IsNullOrEmpty(order.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = total,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = total,
                    //Currency = "usd"
                };
                await service.UpdateAsync(order.PaymentIntentId, options);
            }
            return intent;
        }
        public async Task<PaymentIntent> IsPaymentWorking()
        {
            var order = new Order(75010, 12345, "", "");
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            PaymentIntentService service = new();

            PaymentIntent intent = new();
            long total = order.Total;
            if (string.IsNullOrEmpty(order.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = total,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = total,
                    //Currency = "usd"
                };
                await service.UpdateAsync(order.PaymentIntentId, options);
            }
            return intent;
        }
    }
}
