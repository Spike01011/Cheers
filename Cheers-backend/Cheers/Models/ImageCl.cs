using System.ComponentModel.DataAnnotations.Schema;

namespace Cheers.Models;

public class ImageCl
{
    public int Id { get; set; }
    public string ImageName { get; set; }
    [NotMapped]
    public IFormFile ImageFile { get; set; }
}