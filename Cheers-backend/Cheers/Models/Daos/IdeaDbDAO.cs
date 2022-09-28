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
            _appDbContext.Ideas.Add(idea);
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
            return _appDbContext.Ideas.FirstOrDefault(idea => idea.Id == id);
        }

        public List<Idea> GetAll()
        {
            return _appDbContext.Ideas.ToList();
        }

        public List<Idea> GetByCategoryId(int categoryId)
        {
            return new List<Idea>();
            //return _appDbContext.Ideas.Include(idea => idea.CategoryId).Where(idea => idea.CategoryId == categoryId).ToList();
        }
    }
}
