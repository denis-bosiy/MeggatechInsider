using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class TeacherAvailableHoursDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }
        
        [JsonPropertyName( "teacherId" )]
        public int TeacherId { get; set; }

        [JsonPropertyName( "availableHoursByWeekDay" )]
        public List<AvailableHoursByWeekDayDto> AvailableHoursByWeekDay { get; set; }

        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [JsonPropertyName( "week" )]
        public int Week { get; set; }
    }
}