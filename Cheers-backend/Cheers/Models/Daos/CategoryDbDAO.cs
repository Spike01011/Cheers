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
            if (GetByName(category.Name) == null)
            {
                _appDbContext.Categories.Add(category);
                _appDbContext.SaveChanges();
            }
        }

        public Category Get(int id)
        {
            return _appDbContext.Categories.FirstOrDefault(cat => cat.Id == id);
        }

        public List<Category> GetAll()
        {
            return _appDbContext.Categories.ToList();
        }

        public Category GetByName(string name)
        {
            return _appDbContext.Categories.FirstOrDefault(x => x.Name.ToLower() == name.ToLower());
        }
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
        public void Edit(int id, Category obj)
        {
            throw new NotImplementedException();
        }
    }
}
