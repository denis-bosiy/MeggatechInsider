namespace Domain.TimetableEntities.GuidebookEntities
{
    public class ParadeTime : Entity
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public ParadeTime( DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime )
        {
            DayOfWeek = dayOfWeek;
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}