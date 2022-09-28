using Cheers.Data;
using Cheers.Models.Interfaces;

namespace Cheers.Models.Daos
{
    public class CategoryDbDAO : ICategoryDAO
    {
        private readonly ApplicationDbContext _appDbContext;

        public CategoryDbDAO(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void Add(Category category)
        {
            _appDbContext.Categories.Add(category);
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Edit(int id)
        {
            throw new NotImplementedException();
        }

        public Category Get(int id)
        {
            return _appDbContext.Categories.FirstOrDefault(cat => cat.Id == id);
        }

        public List<Category> GetAll()
        {
            return _appDbContext.Categories.ToList();
        }
    }
}
