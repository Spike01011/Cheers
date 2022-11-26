using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Authorize]
    public class AdminController : ControllerBase
    {
        [Authorize(Roles = "Admin")]
        public IActionResult AdminPage()
        {
            return Ok("Admin");
        }
    }
}
