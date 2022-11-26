namespace Cheers.Services.ImageService
{
    public class ImageService : IImageService
    {
        public string SaveImage(IFormFile imageFile)
        {
            using MemoryStream memoryStream = new();
            imageFile.CopyTo(memoryStream);
            var imageBytes = memoryStream.ToArray();
            var base64String = Convert.ToBase64String(imageBytes);
            return base64String;
        }
    }
}
