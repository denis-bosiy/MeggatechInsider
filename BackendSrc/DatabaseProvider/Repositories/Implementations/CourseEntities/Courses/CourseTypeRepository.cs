using DatabaseProvider.Repositories.Abstractions.CourseEntities.Courses;
using Domain.CourseEntities.Courses;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.Courses
{
    public class CourseTypeRepository : Repository<CourseType>, ICourseTypeRepository
    {
        public CourseTypeRepository( ApplicationContext context )
        : base( context ) { }
        public CourseType GetCourseTypeByName( string name )
        {
            return Entities.Where( s => s.CourseTypeName == name ).FirstOrDefault();
        }
    }
}
