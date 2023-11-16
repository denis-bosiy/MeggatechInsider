using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.LessonTime
{
    public class LessonTimeDto
    {
        [Required]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
