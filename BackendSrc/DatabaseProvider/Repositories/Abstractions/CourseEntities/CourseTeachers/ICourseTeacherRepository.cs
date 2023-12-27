using Domain.CourseEntities.CourceTeachers;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers
{
    public interface ICourseTeacherRepository : IRepository<CourseTeacher>
    {
        CourseTeacher GetById( int id );
        public List<CourseTeacher> GetCourseTeachersByYear( int year );
    }
}
