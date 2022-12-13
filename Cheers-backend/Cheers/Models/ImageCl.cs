using System.ComponentModel.DataAnnotations.Schema;

namespace Cheers.Models;

public class ImageCl
{
    public int Id { get; set; }
    public int IdeaId { get; set; }
    public string? Image { get; set; }
    [NotMapped] public IFormFile? ImageFile { get; set; }
}