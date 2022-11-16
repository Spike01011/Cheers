using Cheers.Data;
using Cheers.Models.Interfaces;
using Cheers.Utils;

namespace Cheers.Models.Daos
{
    public class OrderDbDao : IOrderDao
    {
        private readonly ApplicationDbContext _appDbContext;

        public OrderDbDao(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void Add(Order entity)
        {
            _appDbContext.Orders.Add(entity);
            _appDbContext.SaveChanges();
        }
        public Order Get(int id)
        {
            var order = _appDbContext.Orders.FirstOrDefault(cat => cat.Id == id);
            if (order == null)
                return new Order(0, 0, Statics.GeneralErrorMessage(), Statics.GeneralErrorMessage());
            return order;
        }
        public List<Order> GetAll()
        {
            return _appDbContext.Orders.ToList();
        }
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Edit(int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateProduct(Order order)
        {
            Console.WriteLine("UpdateProduct Order Over View ClientSecret: " + order.ClientSecret);
            Console.WriteLine("UpdateProduct Order Over View PaymentIntentId: " + order.PaymentIntentId);

            var toEditOrder = _appDbContext.Orders.FirstOrDefault(cat => cat.Id == order.Id);
            if (toEditOrder != null)
            {
                Console.WriteLine("Primul If din UpdateProduct");
                //if (toEditOrder.ClientSecret != order.ClientSecret || toEditOrder.PaymentIntentId != order.PaymentIntentId)
                //{
                //Console.WriteLine("Al doilea If din UpdateProduct");
                toEditOrder.ClientSecret = order.ClientSecret;
                toEditOrder.PaymentIntentId = order.PaymentIntentId;
                _appDbContext.Orders.Update(toEditOrder);
                _appDbContext.SaveChanges();
                //}
                //else 
                //{
                //    Console.WriteLine(toEditOrder.Total);
                //}
            }
            else
            {
                Console.WriteLine(toEditOrder.Id);
            }
        }
    }
}
