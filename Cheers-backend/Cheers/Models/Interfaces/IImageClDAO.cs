namespace Cheers.Models.Interfaces;

public interface IImageClDAO : IDao<ImageCl>
{
    public List<ImageCl> GetByIdeaId(int ideaId);
}