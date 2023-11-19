using Application.Abstractions.TImetableServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using Domain.TimetableEntities.TeacherEntities;

namespace Application.Implementations.TimetableServices;

public class TeacherTimetableService : ITeacherTimetableService
{
    private readonly ITeacherTimetableRepository _teacherTimetableRepository;

    public TeacherTimetableService( ITeacherTimetableRepository teacherTimetableRepository )
    {
        _teacherTimetableRepository = teacherTimetableRepository;
    }

    public List<TeacherTimetable> GetTeacherTimetableByYearAndWeek( int year, int week )
    {
        return _teacherTimetableRepository.GetByYearAndWeek( year, week );
    }
}