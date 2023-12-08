using Api.Models.TeacherTimetable;
using Domain.TimetableEntities.TeacherEntities;

namespace Api.Mappers.Timetable;

public static class TeacherTimetableMapper
{
    public static List<AvailableHoursByWeekDayDto> Map( this List<TeacherAvailableHours> teacherAvailableHours ) =>
        teacherAvailableHours.Select( availableHours =>
        {
            return new AvailableHoursByWeekDayDto()
            {
                WeekDay = availableHours.DayOfWeek,
                AvailableLessonTimesIds = availableHours.AvailableLessonTimes.Select( a => a.Id ).ToList(),
                AvailablePairTimesIds = availableHours.AvailablePairTimes.Select( a => a.Id ).ToList()
            };
        } ).ToList();
}