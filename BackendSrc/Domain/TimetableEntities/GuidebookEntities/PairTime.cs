namespace Domain.TimetableEntities.GuidebookEntities
{
    public class PairTime : Entity
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public PairTime( int year, TimeOnly startTime, TimeOnly endTime )
        {
            Year = year;
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}