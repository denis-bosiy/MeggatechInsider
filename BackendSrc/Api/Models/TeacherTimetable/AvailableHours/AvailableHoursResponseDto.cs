using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable.AvailableHours
{
    public class AvailableHoursResponseDto
    {
        [Required]
        [DisplayName( "weekDay" )]
        [JsonPropertyName( "weekDay" )]
        public DayOfWeek WeekDay { get; set; }

        [Required]
        [DisplayName( "startTime" )]
        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [DisplayName( "endTime" )]
        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
