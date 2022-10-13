using Cheers.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net.Http.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace Cheers.Controllers
{
    //[EnableCors("CorsPolicy")]
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
            //var ideaList = new List<Idea>();
            //ideaList.Add(idea);
            //return Ok(JsonConvert.SerializeObject(ideaList));
            return Ok(JsonConvert.SerializeObject(idea));
        }

        public IActionResult AddCategory([FromBody] Category category)
        {
            throw new NotImplementedException();
        }

        public async Task<IActionResult> AddImage([FromForm]ImageCl img)
        {
            img.ImageName = await SaveImage(img.ImageFile);
            _daosMananger.AddImage(img);
            return Ok();
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
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName =new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnv.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }

            return imageName;
        }
    }
}