using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.LessonTime
{
    public class LessonTimesDto
    {
        [JsonPropertyName( "lessonTimes" )]
        public List<LessonTimeDto> LessonTimes { get; set; }
    }
}
