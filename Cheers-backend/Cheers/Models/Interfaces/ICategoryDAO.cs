namespace Cheers.Models.Interfaces
{
    public interface ICategoryDAO : IDao<Category>
    {
        public Category GetByName(string name);
    }
}
