using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.ParadeTime
{
    public class WeekDayDto
    {
        [Required]
        [JsonPropertyName( "weekDay" )]
        public DayOfWeek WeekDay { get; set; }

        [Required]
        [JsonPropertyName( "text" )]
        public string Text { get; set; }
    }
}
