namespace Domain.TimetableEntities.GuidebookEntities
{
    public class LessonTime
    {
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public LessonTime(TimeOnly startTime, TimeOnly endTime)
        {
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}
