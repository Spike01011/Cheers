using System.ComponentModel.DataAnnotations;

namespace Cheers.Models;

public class LoginModel
{
    [EmailAddress, Required]
    public string? Email { get; set; }
    public string? Token { get; set; }
    public bool IsAdmin { get; set; }
}