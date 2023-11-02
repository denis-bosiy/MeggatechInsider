namespace Api.Models.StudyingActivityTimeModels.PairTimeModels
{
    public class CreatePairTimeDto
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
