namespace Api.Models.StudyingActivityTimeModels.ParadeTimeModels
{
    public class ParadeTimeDto
    {
        public DayOfWeek WeekDay { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
