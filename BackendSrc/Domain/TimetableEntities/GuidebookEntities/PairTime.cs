namespace Domain.TimetableEntities
{
    public class PairTime
    {
        public TimeOnly PairStart { get; set; }
        public TimeOnly PairEnd { get; set; }

        public PairTime(TimeOnly pairStart, TimeOnly pairEnd)
        {
            PairStart = pairStart;
            PairEnd = pairEnd;
        }
    }
}
