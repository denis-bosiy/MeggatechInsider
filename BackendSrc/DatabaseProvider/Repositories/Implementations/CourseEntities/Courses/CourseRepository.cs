using DatabaseProvider.Repositories.Abstractions.CourseEntities.Courses;
using Domain.CourseEntities.Courses;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.Courses
{
    public class CourseRepository : Repository<Course>, ICourseRepository
    {
        public CourseRepository( ApplicationContext context )
        : base( context ) { }

        public List<Course> GetCoursesByYear( int year )
        {
            return Entities.Where( s => s.Year == year ).ToList();
        }

        public Course GetCourseById( int id )
        {
            return Entities.Where( s => s.Id == id ).FirstOrDefault();
        }
    }
}
