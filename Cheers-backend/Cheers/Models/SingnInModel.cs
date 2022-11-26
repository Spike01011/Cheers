using System.ComponentModel.DataAnnotations;

namespace Cheers.Models
{
    public class SingnInModel
    {
        [Required, EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
