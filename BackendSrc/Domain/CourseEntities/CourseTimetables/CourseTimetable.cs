namespace Domain.CourseEntities.CourseTimetables
{
    public class CourseTimetable
    {
        public Dictionary<DateOnly, List<CourseLesson>> LessonsByDays { get; init; }
    }
}
