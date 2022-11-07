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

        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Cart cart)
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];
            PaymentIntentService service = new();
            PaymentIntent intent = new();
            long total = 0; // Nu asa :)) trebuie sa le iei din cart sau din order
            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = total,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
                cart.PaymentIntentId = intent.Id;
                cart.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = total,
                    Currency = "usd"
                };
                await service.UpdateAsync(cart.PaymentIntentId, options);
            }
            return intent;
        }
    }
}
