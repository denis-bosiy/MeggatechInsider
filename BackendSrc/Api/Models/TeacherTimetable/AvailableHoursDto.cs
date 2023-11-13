using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class AvailableHoursDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

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
