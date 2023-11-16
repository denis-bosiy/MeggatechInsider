namespace Domain.TimetableEntities.GuidebookEntities
{
    public class LessonTime : Entity
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public LessonTime( int year, TimeOnly startTime, TimeOnly endTime )
        {
            Year = year;
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}