using Cheers.Utils;
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
        public void SendEmail(string userEmail)
        {
            var email = new MimeMessage();
            int smtpPort = int.Parse(_configuration["EmailConnection:SmtpPort"]);

            email.From.Add(MailboxAddress.Parse(_configuration["EmailConnection:EmailUserName"]));
            email.To.Add(MailboxAddress.Parse(userEmail));
            email.Subject = Statics.GetEmailSignUpSubject();
            email.Body = new TextPart(TextFormat.Html) { Text = Statics.GetEmaiSignUpBody() };

            using var smtp = new SmtpClient();
            smtp.Connect(_configuration["EmailConnection:EmailHost"],
                smtpPort, SecureSocketOptions.StartTls);
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
