using Cheers.Data;
using Cheers.Models.Interfaces;

namespace Cheers.Models.Daos
{
    public class IdeaDbDAO : IIdeeaDAO
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public IdeaDbDAO(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public void Add(Idea entity)
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public List<Idea> GetAll()
        {
            throw new NotImplementedException();
        }

        public List<Idea> GetByCategoryId(int id)
        {
            throw new NotImplementedException();
        }
    }
}
