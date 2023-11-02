namespace Api.Models.StudyingActivityTimeModels.LessonTimeModels
{
    public class LessonTimeDto
    {
        public int Id { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
