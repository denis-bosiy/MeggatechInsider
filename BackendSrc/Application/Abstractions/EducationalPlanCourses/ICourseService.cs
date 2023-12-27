using Domain.CourseEntities.Courses;

namespace Application.Abstractions.EducationalPlanCourses
{
    public interface ICourseService
    {
        public List<Course> GetCoursesByYear( int year );
        public Course GetCourseById( int id );
        public void UpdateCourse(
            int id,
            string name,
            string type,
            int hoursByPlan,
            int numberOfGroups );
        public void AddCourse( 
            int id,
            string name,
            string type,
            int hoursByPlan,
            int numberOfGroups );
        public void DeleteCourse( int id );

    }
}
