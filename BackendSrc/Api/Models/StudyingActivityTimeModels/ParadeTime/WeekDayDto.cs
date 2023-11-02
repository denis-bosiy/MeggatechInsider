using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.ParadeTime
{
    public class WeekDayDto
    {
        [Required]
        [DisplayName( "week_day" )]
        [JsonPropertyName( "week_day" )]
        public DayOfWeek WeekDay { get; set; }

        [Required]
        [DisplayName( "text" )]
        [JsonPropertyName( "text" )]
        public string Text { get; set; }
    }
}
