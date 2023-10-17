namespace Domain.TimetableEntities.GuidebookEntities
{
    public class PairTime
    {
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public PairTime( TimeOnly startTime, TimeOnly endTime )
        {
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}
