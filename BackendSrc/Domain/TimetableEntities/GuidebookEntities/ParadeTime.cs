namespace Domain.TimetableEntities
{
    public class ParadeTime
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeOnly ParadeStart { get; set; }
        public TimeOnly ParadeEnd { get; set; }

        public ParadeTime(DayOfWeek dayOfWeek, TimeOnly paradeStart, TimeOnly paradeEnd)
        {
            DayOfWeek = dayOfWeek;
            ParadeStart = paradeStart;
            ParadeEnd = paradeEnd;
        }
    }
}
