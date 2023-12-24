using Domain.CourseEntities.CourceTeachers;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers
{
    public interface ICourseTeacherAvailableHoursRepository : IRepository<CourseTeacherAvailableHours>
    {
        CourseTeacherAvailableHours GetById( int id );
    }
}
