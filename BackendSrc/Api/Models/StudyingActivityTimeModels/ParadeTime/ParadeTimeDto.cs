using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.ParadeTime
{
    public class ParadeTimeDto
    {
        [Required]
        [DisplayName( "week_day" )]
        [JsonPropertyName( "week_day" )]
        public DayOfWeek WeekDay { get; set; }

        [Required]
        [DisplayName( "start_time" )]
        [JsonPropertyName( "start_time" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "end_time" )]
        public TimeOnly EndTime { get; set; }
    }
}
