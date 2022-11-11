using Cheers.Data;
using Cheers.Models.Interfaces;

namespace Cheers.Models.Daos;

public class ImageClDbDAO : IImageClDAO
{
    private readonly ApplicationDbContext _appDbContext;

    public ImageClDbDAO(ApplicationDbContext aooDbContext)
    {
        _appDbContext = aooDbContext;
    }

    public List<ImageCl> GetAll()
    {
        return _appDbContext.ImageCls.ToList();
    }

    public ImageCl Get(int id)
    {
        return _appDbContext.ImageCls.Where(x => x.Id == id).FirstOrDefault();
    }

    public List<ImageCl> GetByIdeaId(int ideaId)
    {
        return _appDbContext.ImageCls.Where(x => x.IdeaId == ideaId).ToList();
    }

    public void Edit(int id)
    {
        throw new NotImplementedException();
    }

    public void Delete(int id)
    {
        var imageCl = _appDbContext.ImageCls.Where(x => x.Id == id).FirstOrDefault();
        if (imageCl != null)
        {
            _appDbContext.ImageCls.Remove(imageCl);
            _appDbContext.SaveChanges();
        }
    }

    public void Add(ImageCl entity)
    {
            _appDbContext.Add(entity);
        _appDbContext.SaveChanges();
    }
}