using Cheers.Models;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Cheers.Controllers
{
    [Authorize]
    [EnableCors]
    public class IdeaController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IIdeeaDAO _ideaDao;


        public IdeaController(IIdeeaDAO ideaDao, ICategoryDAO categoryDao, IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
            _ideaDao = ideaDao;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Idea> ideas = _ideaDao.GetAll();
            return Ok(JsonConvert.SerializeObject(ideas));
        }

        [HttpPost]
        public async Task<IActionResult> AddIdea([FromBody] Idea idea)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                idea.Author = user;
                _ideaDao.Add(idea);
            }
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> EditIdea(int id, [FromBody] Idea idea)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var oldIdeaAuthor = _ideaDao.Get(id).Author;
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                if (oldIdeaAuthor.NormalizedEmail == user.NormalizedEmail)
                {
                    idea.Author = user;
                    _ideaDao.Edit(id, idea);
                }
            }
            return Ok();
        }

        [HttpGet]
        public IActionResult GetIdea(int id)
        {
            var idea = _ideaDao.Get(id);
            return Ok(JsonConvert.SerializeObject(idea));
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveIdea(int id)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var idea = _ideaDao.Get(id);
                var roles = HttpContext.User.FindAll(ClaimTypes.Role);
                
                if (user != idea.Author && roles.All(x => x.Value != "Admin")) return Unauthorized("You're not the author of this Idea");
                //_daosMananger.DeleteImagesForIdea(id); //TODO -Fmm De Viata
                _ideaDao.Delete(id);
                return Ok();
            }
            return Unauthorized("You have to Log In to do that!");
        }
    }
}
