using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers;
using Domain.CourseEntities.CourceTeachers;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseTeachers
{
    public class CourseTeacherRepository : Repository<CourseTeacher>, ICourseTeacherRepository
    {
        public CourseTeacherRepository( ApplicationContext context ) 
            : base( context )
        { }

        public CourseTeacher GetById( int id )
            => Entities.Where( t => t.Id == id ).FirstOrDefault();
    }
}
