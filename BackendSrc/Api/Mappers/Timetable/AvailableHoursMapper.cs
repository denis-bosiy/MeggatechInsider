using Api.Models.TeacherTimetable;
using Domain.TimetableEntities.TeacherEntities;

namespace Api.Mappers.Timetable;

public static class AvailableHoursMapper
{
    private static AvailableHoursDto Map( this AvailableHours availableHours ) => new()
    {
        Id = availableHours.LessonTime.Id,
        StartTime = availableHours.LessonTime.StartTime,
        EndTime = availableHours.LessonTime.EndTime,
        WeekDay = availableHours.DayOfWeek
    };

    public static List<AvailableHoursDto> Map( this List<AvailableHours> pairTimes ) =>
        pairTimes.Select( Map ).ToList();
}