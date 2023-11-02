namespace Api.Models.StudyingActivityTimeModels.LessonTimeModels
{
    public class CreateLessonTimeDto
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
