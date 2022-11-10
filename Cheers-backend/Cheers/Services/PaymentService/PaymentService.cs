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
            long total = order.Price;
            if (string.IsNullOrEmpty(order.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = total,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
                order.PaymentIntentId = intent.Id;
                order.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = total,
                    Currency = "usd"
                };
                await service.UpdateAsync(order.PaymentIntentId, options);
            }
            return intent;
        }

        public bool IsPaymentSuccesfull()
        {
            throw new NotImplementedException();
        }
    }
}
