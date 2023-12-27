using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.Courses
{
    public interface ICourseRepository : IRepository<Course>
    {
        public List<Course> GetCoursesByYear( int year );
        public Course GetCourseById( int id );
    }
}
