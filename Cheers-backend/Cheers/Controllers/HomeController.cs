using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace Cheers.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DaoMananger _daosMananger;
        private readonly IWebHostEnvironment _hostEnv;

        public HomeController(ILogger<HomeController> logger, IIdeeaDAO ideaDao, ICategoryDAO categoryDao, IImageClDAO imgDao, IWebHostEnvironment hostEnv)
        {
            _logger = logger;
            _daosMananger = new DaoMananger(categoryDao, ideaDao, imgDao);
            _hostEnv = hostEnv;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Idea> ideas = _daosMananger.GetAllIdeas();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        [HttpPost]
        public IActionResult AddIdea([FromBody] Idea idea)
        {
            _daosMananger.AddIdea(idea);
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

        public IActionResult AddCategory([FromBody] Category category)
        {
            var check = _daosMananger.CategoryExists(category);
            if (!_daosMananger.CategoryExists(category))
            {
                _daosMananger.AddCategory(category);
            }

            return Ok();

        }

        public IActionResult AddImage([FromForm]ImageCl img)
        {
            img.Image = SaveImage(img.ImageFile);
            _daosMananger.AddImage(img);
            return Ok();
        }
        [HttpDelete]
        public IActionResult RemoveImage(int id)
        {
            _daosMananger.DeleteImage(id);
            return Ok();
        }

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