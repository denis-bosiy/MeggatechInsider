namespace Api.Models.StudyingActivityTimeModels.ParadeTimeModels
{
    public class SetParadeTimeDto
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public DayOfWeek WeekDay { get; set; }
    }
}
