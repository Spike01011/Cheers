using Cheers.Models.Interfaces;

namespace Cheers.Models.Daos
{
    public class DaoMananger
    {
        private readonly ICategoryDAO _categoryDbDAO;
        private readonly IIdeeaDAO _ideaDbDAO;
        private readonly IImageClDAO _imageClDbDAO;

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

        public void EditCategory(int categoryId, Category category)
        {
            _categoryDbDAO.Edit(categoryId, category);
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

        public void EditIdea(int ideaId, Idea idea)
        {
            _ideaDbDAO.Edit(ideaId, idea);
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

        public void DeleteImage(int id)
        {
            _imageClDbDAO.Delete(id);
        }

        public List<ImageCl> GetImagesForIdea(int ideaId)
        {
            return _imageClDbDAO.GetByIdeaId(ideaId);
        }

        public bool CategoryExists(Category category)
        {
            var check = _categoryDbDAO.GetByName(category.Name);
            return (check != null);
        }

        public void DeleteImagesForIdea(int ideaId)
        {
            var images = GetImagesForIdea(ideaId);
            foreach (var image in images)
            {
                DeleteImage(image.Id);
            }
        }
    }
}
