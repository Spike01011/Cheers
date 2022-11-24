using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Cheers.Controllers
{
    //[Authorize]
    [EnableCors]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DaoMananger _daosMananger;
        private readonly IWebHostEnvironment _hostEnv;
        private readonly IAccountRepository _accountRepository;

        public HomeController(ILogger<HomeController> logger, IIdeeaDAO ideaDao, ICategoryDAO categoryDao, IImageClDAO imgDao, IWebHostEnvironment hostEnv, IAccountRepository accountRepository)
        {
            _logger = logger;
            _daosMananger = new DaoMananger(categoryDao, ideaDao, imgDao);
            _hostEnv = hostEnv;
            _accountRepository = accountRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Idea> ideas = _daosMananger.GetAllIdeas();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        [HttpGet]
        [Authorize]
        public IActionResult IndexJWT()
        {
            List<Idea> ideas = _daosMananger.GetAllIdeas();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddIdea([FromBody] Idea idea)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                idea.Author = user;
                _daosMananger.AddIdea(idea);
            }
            return Ok();
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> EditIdea(int id, [FromBody] Idea idea)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                idea.Author = user;
                _daosMananger.EditIdea(id, idea);
            }
            return Ok();
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_daosMananger.GetAllCategories());
        }

        [HttpGet]
        public IActionResult GetIdea(int id)
        {
            var idea = _daosMananger.GetIdea(id);
            return Ok(JsonConvert.SerializeObject(idea));
        }
        [Authorize]
        public IActionResult AddCategory([FromBody] Category category)
        {
            var check = _daosMananger.CategoryExists(category);
            if (!_daosMananger.CategoryExists(category))
            {
                _daosMananger.AddCategory(category);
            }

            return Ok();

        }

        [Authorize]
        public async Task<IActionResult> AddImage([FromForm]ImageCl img)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var expectedUser = _daosMananger.GetIdea(img.IdeaId).Author;
                if (user != expectedUser) return Unauthorized("You're not the author of this Idea");
                img.Image = SaveImage(img.ImageFile);
                _daosMananger.AddImage(img);

                return Ok();
            }

            return Unauthorized("Log in Before adding a photo");
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> RemoveIdea(int id)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var idea = _daosMananger.GetIdea(id);
                var roles = HttpContext.User.FindAll(ClaimTypes.Role);
                Console.WriteLine("AAAAAAAAAAAA");
                foreach (var role in roles)
                {
                    Console.WriteLine("AAAAAAAAAAAA" + role.Value);
                }
                if (user != idea.Author && roles.All(x => x.Value != "Admin")) return Unauthorized("You're not the author of this Idea");
                _daosMananger.DeleteImagesForIdea(id);
                _daosMananger.DeleteIdea(id);
                return Ok();
            }

            return Unauthorized("You have to Log In to do that!");
        }


        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> RemoveImage(int id)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var roles = HttpContext.User.FindAll(ClaimTypes.Role);
                var img = _daosMananger.GetImage(id);
                var expectedUser = _daosMananger.GetIdea(img.IdeaId).Author;
                
                if (user != expectedUser && roles.All(x => x.Value != "Admin")) return Unauthorized("You're not the author of this Idea");
                
                _daosMananger.DeleteImage(id);
                
                return Ok();
            }

            return Unauthorized("Log in Before deleting a photo");
        }

        [Authorize(Roles = "Admin")]
        public IActionResult AdminPage()
        {
            return Ok("Admin");
        }


        [AllowAnonymous]
        public IActionResult GetImagesForIdea(int id)
        {
            return Ok(JsonConvert.SerializeObject(_daosMananger.GetImagesForIdea(id)));
        }

        public IActionResult Privacy()
        {
            TestModel testModel = new TestModel(10, "Privacy");
            return Ok(JsonConvert.SerializeObject(testModel));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [NonAction]
        public string SaveImage(IFormFile imageFile)
        {
            string base64string;
                using (MemoryStream _mStream = new MemoryStream())
                {
                    imageFile.CopyTo(_mStream);
                    byte[] _imageBytes = _mStream.ToArray();
                    base64string = Convert.ToBase64String(_imageBytes);
                    return base64string;
                }
            //string imageName =new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            //imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            //var imagePath = Path.Combine(_hostEnv.ContentRootPath, "Images", imageName);
            //using (var fileStream = new FileStream(imagePath, FileMode.Create))
            //{
            //    await imageFile.CopyToAsync(fileStream);
            //}

        }
    }
}