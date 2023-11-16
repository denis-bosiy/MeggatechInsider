namespace Domain.TimetableEntities.GuidebookEntities
{
    public class ParadeTime : Entity
    {
        public int Year { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public ParadeTime( int year, DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime )
        {
            Year = year;
            DayOfWeek = dayOfWeek;
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}