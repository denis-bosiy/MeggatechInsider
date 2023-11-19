using Domain.TimetableEntities.TeacherEntities;

namespace Application.Abstractions.TImetableServices;

public interface ITeacherTimetableService
{
    List<TeacherTimetable> GetTeacherTimetableByYearAndWeek( int year, int week );
}