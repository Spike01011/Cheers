namespace Cheers.Models
{
    public class Order
    {
        public int Price { get; set; }
        public string? PaymentIntentId { get; internal set; }
        public string? ClientSecret { get; internal set; }
        public int TipAmount { get; set; }
        public CardModel? Card { get; set; }
    }
}
