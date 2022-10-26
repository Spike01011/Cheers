
namespace Cheers.Models
{
    public class TestModel
    {
        public int Age { get; set; }
        public string Name { get; set; }

        public TestModel(int age, string name)
        {
            Age = age;
            Name = name;
        }
    }
}
