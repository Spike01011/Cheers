using System.ComponentModel.DataAnnotations;

namespace Cheers.Models
{
    public class CardModel
    {
        [EmailAddress]
        public string? UserEmail { get; set; }
        public int CardNumber { get; set; }
        public int CvvCode { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}
