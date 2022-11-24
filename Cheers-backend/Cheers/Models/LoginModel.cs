namespace Cheers.Models;

public class LoginModel
{
    public string Email { get; set; }
    public string Token { get; set; }
    public bool IsAdmin { get; set; }
}