using Cheers.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net.Http.Json;
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

        public HomeController(ILogger<HomeController> logger, IIdeeaDAO ideaDao, ICategoryDAO categoryDao)
        {
            _logger = logger;
            _daosMananger = new DaoMananger(categoryDao, ideaDao);
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Idea> ideas = _daosMananger.GetAllIdeas();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        //public IActionResult AddIdea()
        //{

        //}

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
    }
}