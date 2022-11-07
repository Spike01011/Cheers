using Cheers.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace Cheers.Services.EmailService
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void SendEmail(EmailDto emailDto)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_configuration["EmailConnection:EmailUserName"]));
            email.To.Add(MailboxAddress.Parse(emailDto.To));
            email.Subject = emailDto.Subject;
            email.Body = new TextPart(TextFormat.Html) { Text = GetEmaiBody() };

            using var smtp = new SmtpClient();
            smtp.Connect(_configuration["EmailConnection:EmailHost"], 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(_configuration["EmailConnection:EmailUserName"],
                _configuration["EmailConnection:EmailPassword"]);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
        private string GetEmaiBody()
        {
            return "<h1>Go to Cheers.com</h1></br><p>https://localhost:7021/</p>";
        }
    }
}
