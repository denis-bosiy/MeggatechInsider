using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.TeacherEntities;

public class TeacherAvailableHoursRepository : Repository<TeacherAvailableHours>, ITeacherAvailableHoursRepository
{
    public TeacherAvailableHoursRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<TeacherAvailableHours> GetAll() =>
        Entities.Include( a => a.AvailableLessonTimes )
            .Include( a => a.AvailablePairTimes )
            .ToList();

    public TeacherAvailableHours GetById( int id ) =>
        Entities.Include( a => a.AvailableLessonTimes )
            .Include( a => a.AvailablePairTimes )
            .FirstOrDefault( a => a.Id == id ) ?? throw new InvalidOperationException();

    public List<TeacherAvailableHours> GetByStartDate( DateOnly startDate ) =>
        Entities.Include( a => a.AvailableLessonTimes )
            .Include( a => a.AvailablePairTimes )
            .Where( a => a.WeekStartDate == startDate )
            .ToList();

    public List<TeacherAvailableHours> GetByTeacherId( int teacherId ) =>
        Entities.Include( a => a.AvailableLessonTimes )
            .Include( a => a.AvailablePairTimes )
            .Where( a => a.TeacherId == teacherId )
            .ToList();

    public void Update( TeacherAvailableHours teacherAvailableHours ) => Entities.Update( teacherAvailableHours );
}