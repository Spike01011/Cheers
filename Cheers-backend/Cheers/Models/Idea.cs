using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace Cheers.Models
{
    public class Idea
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Please enter a name for your Idea!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please enter a description for your Idea!")]
        public string Description { get; set; }
        
        [Required(ErrorMessage = "Please enter a short description for your Idea!")]
        public string ShortDescription { get; set; }
        
        [Required(ErrorMessage = "Please select a Category for your Idea!")]
        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public int Target { get; set; }
        [NotMapped]public List<ImageCl> Images { get; set; }

        public override string ToString()
        {
            return
                $"{{ Name: {Name}, Description:{Description}, ShortDesc:{ShortDescription}, CatId:{CategoryId}, Category:{Category}, id: {Id}, Target: {Target}}}";
        }
    }
}
