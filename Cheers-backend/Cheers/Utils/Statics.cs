namespace Cheers.Utils
{
    public static class Statics
    {
        public static string GetEmaiSignUpBodyMessage()
        {
            return "<h1>Go to Cheers.com</h1></br><a href='http://localhost:3000/'>Go to the Site</a>";
        }

        public static string GetEmailSignUpSubject()
        {
            return "SignUp Cheers Confirmation Successed";
        }

        public static string GetEmailPaymentMessage()
        {
            return "<h1>Payment succesfull!</h1></br><a href='http://localhost:3000/'>Go to the Site</a>";
        }

        public static string GetPaymentEmailSubject()
        {
            return "Payment succesfull!";
        }

        public static string GeneralErrorMessage()
        {
            return "Something Went Wrong!";
        }
    }
}
