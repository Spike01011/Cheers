namespace Cheers.Models.Interfaces
{
    public interface IDao<T>
    {
        public List<T> GetAll();
        public T Get(int id);
        public void Edit(int id, T obj);
        public void Delete(int id);
        public void Add (T entity);
    }
}
