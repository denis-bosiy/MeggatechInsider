using Domain.TimetableEntities.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;

public interface ITeacherAvailableHoursRepository : IRepository<TeacherAvailableHours>
{
    public List<TeacherAvailableHours> GetAll();
    public TeacherAvailableHours GetById( int id );

    public List<TeacherAvailableHours> GetByStartDate( DateOnly startDate );

    public List<TeacherAvailableHours> GetByTeacherId( int teacherId );

    public void Update( TeacherAvailableHours teacherAvailableHours );
}