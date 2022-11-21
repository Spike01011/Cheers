namespace Cheers.Models.Interfaces
{
    public interface IOrderDao : IDao<Order>
    {
        public void UpdateProduct(Order order);
        public Task<string> AddAna(Order order);
    }
}
