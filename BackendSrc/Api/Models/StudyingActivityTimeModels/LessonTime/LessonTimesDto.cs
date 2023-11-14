using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.LessonTime
{
    public class LessonTimesDto
    {
        [Required]
        [JsonPropertyName( "lesson_times" )]
        public List<LessonTimeDto> LessonTimes { get; set; }
    }
}
