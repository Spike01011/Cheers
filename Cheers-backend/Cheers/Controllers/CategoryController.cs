using Cheers.Models;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cheers.Controllers
{
    [Authorize]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryDAO _categoryDao;
        public CategoryController(ICategoryDAO categoryDao)
        {
            _categoryDao = categoryDao;
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_categoryDao.GetAll());
        }

        [Authorize]
        public IActionResult AddCategory([FromBody] Category category)
        {
            _categoryDao.Add(category);
            return Ok("category added");
        }
    }
}
