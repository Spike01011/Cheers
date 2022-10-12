using Cheers.Data;
using Cheers.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cheers.Models.Daos
{
    public class IdeaDbDAO : IIdeeaDAO
    {
        private readonly ApplicationDbContext _appDbContext;

        public IdeaDbDAO(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void Add(Idea idea)
        {
            Console.WriteLine(idea);
            _appDbContext.Ideas.Add(idea);
            _appDbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Edit(int id)
        {
            throw new NotImplementedException();
        }

        public Idea Get(int id)
        {
            return _appDbContext.Ideas.Include(x => x.Category).FirstOrDefault(idea => idea.Id == id);
        }

        public List<Idea> GetAll()
        {
            return _appDbContext.Ideas.Include(x => x.Category).ToList();
        }

        public List<Idea> GetByCategoryId(int categoryId)
        {
            return _appDbContext.Ideas.Include(x => x.Category).Where(idea => idea.CategoryId == categoryId).ToList();
        }
    }
}
