using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.ParadeTime
{
    public class ParadeTimeDto
    {
        [Required]
        [JsonPropertyName( "weekDay" )]
        public DayOfWeek WeekDay { get; set; }

        [Required]
        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
