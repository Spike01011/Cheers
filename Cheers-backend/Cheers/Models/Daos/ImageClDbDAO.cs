using Cheers.Data;
using Cheers.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

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
        return _appDbContext.ImageCls.Where(x => x.Id == id).Include(x => x.IdeaId).FirstOrDefault();
    }

    public List<ImageCl> GetByIdeaId(int ideaId)
    {
        return _appDbContext.ImageCls.Where(x => x.IdeaId == ideaId).ToList();
    }

    public void Edit(int id, ImageCl img)
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