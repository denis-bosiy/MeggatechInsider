namespace Domain.TimetableEntities
{
    public class LessonTime
    {
        public TimeOnly LessonStart { get; set; }
        public TimeOnly LessonEnd { get; set; }

        public LessonTime(TimeOnly lessonStart, TimeOnly lessonEnd)
        {
            LessonStart = lessonStart;
            LessonEnd = lessonEnd;
        }
    }
}
