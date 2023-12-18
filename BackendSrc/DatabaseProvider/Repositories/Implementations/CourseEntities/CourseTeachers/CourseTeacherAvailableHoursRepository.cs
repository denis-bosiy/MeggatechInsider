using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers;
using Domain.CourseEntities.CourceTeachers;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseTeachers
{
    public class CourseTeacherAvailableHoursRepository : Repository<CourseTeacherAvailableHours>, ICourseTeacherAvailableHoursRepository
    {
        public CourseTeacherAvailableHoursRepository( ApplicationContext context ) 
            : base( context )
        { }

        public CourseTeacherAvailableHours GetById( int id )
            => Entities.Where( h => h.Id == id ).FirstOrDefault();
    }
}
