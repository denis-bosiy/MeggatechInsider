using Domain.TimetableEntities.LessonEntities;

namespace Domain.TimetableEntities
{
    public class Timetable
    {
        public Dictionary<DayOfWeek, List<Lesson>> LessonsByDays { get; init; }
    }
}
