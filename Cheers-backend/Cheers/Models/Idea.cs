namespace Cheers.Models
{
    public class Idea
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ShopDescription { get; set; }
        public Category Category { get; set; }
    }
}
