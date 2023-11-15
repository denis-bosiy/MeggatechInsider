using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.LessonTime
{
    public class CreateLessonTimeDto
    {
        [Required]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
