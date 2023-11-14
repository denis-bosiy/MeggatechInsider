using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class AvailableHoursDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "weekDay" )]
        public DayOfWeek WeekDay { get; set; }

        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
