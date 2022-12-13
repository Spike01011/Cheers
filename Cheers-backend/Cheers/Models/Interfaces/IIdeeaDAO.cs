namespace Cheers.Models.Interfaces
{
    public interface IIdeeaDAO :IDao<Idea>
    {
        public List<Idea> GetByCategoryId(int id);
    }
}
