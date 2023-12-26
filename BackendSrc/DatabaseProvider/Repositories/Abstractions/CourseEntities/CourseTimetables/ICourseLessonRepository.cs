using Domain.CourseEntities.CourseTimetables;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTimetables
{
    public interface ICourseLessonRepository : IRepository<CourseLesson>
    {
        CourseLesson GetById( int id );
    }
}
