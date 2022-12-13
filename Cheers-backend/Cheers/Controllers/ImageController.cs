using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Cheers.Services.ImageService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace Cheers.Controllers
{
    [Authorize]
    public class ImageController : ControllerBase
    {
        private readonly IImageClDAO _imageClDbDAO;
        private readonly IAccountRepository _accountRepository;
        private readonly IImageService _imageService;

        public ImageController(IImageClDAO imageClDbDAO, IAccountRepository accountRepository, IImageService imageService)
        {
            _imageClDbDAO = imageClDbDAO;
            _accountRepository = accountRepository;
            _imageService = imageService;
        }

        public async Task<IActionResult> AddImage([FromForm] ImageCl img)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var expectedUser = _imageClDbDAO.GetIdea(img.IdeaId).Author;
                if (user != expectedUser) return Unauthorized("You're not the author of this Idea");
                img.Image = _imageService.SaveImage(img.ImageFile);
                _imageClDbDAO.Add(img);

                return Ok();
            }

            return Unauthorized("Log in Before adding a photo");
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveImage(int ideaId)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var email = identity.FindFirst(ClaimTypes.Email).Value;
                var user = await _accountRepository.GetByMail(email);
                var roles = HttpContext.User.FindAll(ClaimTypes.Role);
                var img = _imageClDbDAO.Get(ideaId);
                var expectedUser = _imageClDbDAO.GetIdea(img.IdeaId).Author;

                if (user != expectedUser && roles.All(x => x.Value != "Admin"))
                    return Unauthorized("You're not the author of this Idea");

                _imageClDbDAO.Delete(ideaId);

                return Ok();
            }

            return Unauthorized("Log in Before deleting a photo");
        }

        [AllowAnonymous]
        public IActionResult GetImagesForIdea(int id)
        {
            return Ok(JsonConvert.SerializeObject(_imageClDbDAO.GetByIdeaId(id)));
        }

        public IActionResult DeleteImagesForIdea(int ideaId)
        {
            _imageClDbDAO.DeleteImagesForIdea(ideaId);
            return Ok();
        }
    }
}
