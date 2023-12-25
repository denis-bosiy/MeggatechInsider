namespace Domain.CourseEntities.Courses
{
    public class CourseType : Entity
    {
        public string CourseTypeName { get; set; }

        public List<Course> Courses { get; set; } = new List<Course>();

        public CourseType() { }

        public CourseType( string courseTypeName )
        {
            CourseTypeName = courseTypeName;
        }
    }
}
