using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Cheers.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        private readonly DaoMananger _daoManager;
        private readonly IAccountRepository _accountRepository;

        public HomeController(IIdeeaDAO ideaDao, ICategoryDAO categoryDao, IImageClDAO imgDao,
            IAccountRepository accountRepository)
        {
            _daoManager = new DaoMananger(categoryDao, ideaDao, imgDao);
            _accountRepository = accountRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Idea> ideas = _daoManager.GetAllIdeas();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        [HttpGet]
        [Authorize]
        public IActionResult IndexJWT()
        {
            List<Idea> ideas = _daoManager.GetAllIdeas();
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
                _daoManager.AddIdea(idea);
            }

            return Ok();
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_daoManager.GetAllCategories());
        }

        [HttpGet]
        public IActionResult GetIdea(int id)
        {
            var idea = _daoManager.GetIdea(id);
            return Ok(JsonConvert.SerializeObject(idea));
        }

        [Authorize]
        public IActionResult AddCategory([FromBody] Category category)
        {
            var check = _daoManager.CategoryExists(category);
            if (!check)
            {
                _daoManager.AddCategory(category);
            }

            return Ok();
        }

        [Authorize]
        public IActionResult AddImage([FromForm] ImageCl img)
        {
            img.Image = SaveImage(img.ImageFile);
            _daoManager.AddImage(img);
            return Ok();
        }

        [Authorize]
        [HttpDelete]
        public IActionResult RemoveImage(int id)
        {
            _daoManager.DeleteImage(id);
            return Ok();
        }

        [AllowAnonymous]
        public IActionResult GetImagesForIdea(int id)
        {
            return Ok(JsonConvert.SerializeObject(_daoManager.GetImagesForIdea(id)));
        }

        [NonAction]
        private string SaveImage(IFormFile imageFile)
        {
            using MemoryStream memoryStream = new();
            imageFile.CopyTo(memoryStream);
            var imageBytes = memoryStream.ToArray();
            var base64String = Convert.ToBase64String(imageBytes);
            return base64String;
        }
    }
}