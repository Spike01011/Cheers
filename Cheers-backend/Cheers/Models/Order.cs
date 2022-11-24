
namespace Cheers.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int Total { get; set; }
        public int TipAmount { get; set; }
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
        public ApplicationUser? Author { get; set; }

        public Order(int total, int tip, string paymentIntentId, string clientSecret)
        {
            Total = total;
            TipAmount = tip;
            PaymentIntentId = paymentIntentId;
            ClientSecret = clientSecret;
        }
        public Order() { }
    }
}
