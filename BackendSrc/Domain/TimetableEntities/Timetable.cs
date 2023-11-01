using Domain.TimetableEntities.LessonEntities;

namespace Domain.TimetableEntities
{
    public class Timetable
    {
        public Dictionary<DateOnly, List<Lesson>> LessonsByDays { get; init; }
    }
}