namespace Domain.CourseEntities.Courses
{
    public class CourseType : Entity
    {
        public string CourseTypeName { get; set; }

        public List<Course> Courses { get; set; } = new();

        public CourseType( string courseTypeName )
        {
            CourseTypeName = courseTypeName;
        }
    }
}
