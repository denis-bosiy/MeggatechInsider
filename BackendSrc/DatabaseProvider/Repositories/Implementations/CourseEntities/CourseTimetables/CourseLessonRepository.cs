using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTimetables;
using Domain.CourseEntities.CourseTimetables;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseTimetables
{
    public class CourseLessonRepository : Repository<CourseLesson>, ICourseLessonRepository
    {
        public CourseLessonRepository( ApplicationContext context ) 
            : base( context )
        { }

        public CourseLesson GetById( int id )
            => Entities.Where( l => l.Id == id ).FirstOrDefault();
    }
}
