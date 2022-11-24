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
        public void SendEmail(string userEmail, string emailSubject, string emailBodyMessage)
        {
            var email = new MimeMessage();
            int smtpPort = int.Parse(_configuration["EmailConnection:SmtpPort"]);

            email.From.Add(MailboxAddress.Parse(_configuration["EmailConnection:EmailUserName"]));
            email.To.Add(MailboxAddress.Parse(userEmail));
            email.Subject = emailSubject;
            email.Body = new TextPart(TextFormat.Html) { Text = emailBodyMessage };

            using var smtp = new SmtpClient();
            smtp.Connect(_configuration["EmailConnection:EmailHost"],
                smtpPort, SecureSocketOptions.StartTls);
            smtp.Authenticate(_configuration["EmailConnection:EmailUserName"],
                _configuration["EmailConnection:EmailPassword"]);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
