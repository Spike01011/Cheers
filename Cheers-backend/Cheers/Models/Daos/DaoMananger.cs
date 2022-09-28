namespace Cheers.Models.Daos
{
    public class DaoMananger
    {
        private CategoryDbDAO _categoryDbDAO;
        private IdeaDbDAO _ideaDbDAO;

        public DaoMananger(CategoryDbDAO categoryDbDAO, IdeaDbDAO ideaDbDAO)
        {
            _categoryDbDAO = categoryDbDAO;
            _ideaDbDAO = ideaDbDAO;
        }

        public void AddCategory(Category category)
        {
            _categoryDbDAO.Add(category);
        }

        public void DeleteCategory(int categoryId)
        {
            _categoryDbDAO.Delete(categoryId);
        }

        public void EditCategory(int categoryId)
        {
            _categoryDbDAO.Edit(categoryId);
        }

        public Category GetCategory(int categoryId)
        {
            return _categoryDbDAO.Get(categoryId);
        }

        public List<Category> GetAllCategories()
        {
            return _categoryDbDAO.GetAll();
        }

        public void AddIdea(Idea idea)
        {
            _ideaDbDAO.Add(idea);
        }

        public void DeleteIdea(int ideaId)
        {
            _ideaDbDAO.Delete(ideaId);
        }

        public void EditIdea(int ideaId)
        {
            _ideaDbDAO.Edit(ideaId);
        }

        public Idea GetIdea(int ideaId)
        {
            return _ideaDbDAO.Get(ideaId);
        }

        public List<Idea> GetAllIdeas()
        {
            return _ideaDbDAO.GetAll();
        }

        public List<Idea> GetIdeasByCategoryId(int categoryId)
        {
            return _ideaDbDAO.GetByCategoryId(categoryId);
        }
    }
}
