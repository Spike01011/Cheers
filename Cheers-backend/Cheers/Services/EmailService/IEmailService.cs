using Cheers.Models;

namespace Cheers.Services.EmailService
{
    public interface IEmailService
    {
        void SendEmail(EmailDto emailDto);
    }
}
