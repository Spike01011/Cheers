using Cheers.Models.Interfaces;

namespace Cheers.Models.Daos
{
    public class DaoMananger
    {
        private ICategoryDAO _categoryDbDAO;
        private IIdeeaDAO _ideaDbDAO;
        private IImageClDAO _imageClDbDAO;

        public DaoMananger(ICategoryDAO categoryDbDAO, IIdeeaDAO ideaDbDAO, IImageClDAO imageClDbDAO)
        {
            _categoryDbDAO = categoryDbDAO;
            _ideaDbDAO = ideaDbDAO;
            _imageClDbDAO = imageClDbDAO;
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

        public List<ImageCl> GetAllImages()
        {
            return _imageClDbDAO.GetAll();
        }

        public ImageCl GetImage(int id)
        {
            return _imageClDbDAO.Get(id);
        }

        public void AddImage(ImageCl img)
        {
            _imageClDbDAO.Add(img);
        }

        private void DeleteImage(int id)
        {
            _imageClDbDAO.Delete(id);
        }
    }
}
