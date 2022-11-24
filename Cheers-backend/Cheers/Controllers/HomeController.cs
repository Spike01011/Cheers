using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Security.Claims;

namespace Cheers.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        private readonly DaoMananger _daosMananger;
        private readonly IAccountRepository _accountRepository;

        public HomeController(IIdeeaDAO ideaDao, ICategoryDAO categoryDao, IImageClDAO imgDao, IAccountRepository accountRepository)
        {
            _daosMananger = new DaoMananger(categoryDao, ideaDao, imgDao);
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
                var clm = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(clm);
                idea.Author = user;
                _daosMananger.AddIdea(idea);
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
            if (!check)
            {
                _daosMananger.AddCategory(category);
            }

            return Ok();

        }
        [Authorize]
        public IActionResult AddImage([FromForm] ImageCl img)
        {
            img.Image = SaveImage(img.ImageFile);
            _daosMananger.AddImage(img);
            return Ok();
        }
        [Authorize]
        [HttpDelete]
        public IActionResult RemoveImage(int id)
        {
            _daosMananger.DeleteImage(id);
            return Ok();
        }

        [AllowAnonymous]
        public IActionResult GetImagesForIdea(int id)
        {
            return Ok(JsonConvert.SerializeObject(_daosMananger.GetImagesForIdea(id)));
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
            using MemoryStream _mStream = new();

            imageFile.CopyTo(_mStream);
            byte[] _imageBytes = _mStream.ToArray();
            base64string = Convert.ToBase64String(_imageBytes);
            return base64string;
        }
    }
}