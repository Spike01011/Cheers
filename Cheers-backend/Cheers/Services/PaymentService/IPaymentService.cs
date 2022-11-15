using Cheers.Models;
using Stripe;

namespace Cheers.Services.PaymentService
{
    public interface IPaymentService
    {
        Task<PaymentIntent> CreateOrUpdatePaymentIntent(Order order);
        bool IsPaymentSuccesfull();
        Task<PaymentIntent> IsPaymentWorking();
    }
}
