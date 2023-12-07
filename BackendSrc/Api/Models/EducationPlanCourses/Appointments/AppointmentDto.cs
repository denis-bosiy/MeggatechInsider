using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Appointments
{
    public class AppointmentDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "teacher" )]
        public string Teacher { get; set; }

        [JsonPropertyName( "groupCount" )]
        public int GroupCount { get; set; }

        [JsonPropertyName( "hoursOnWeek" )]
        public int HoursOnWeek { get; set; }

        [JsonPropertyName( "hoursOnYear" )]
        public int HoursOnYear { get; set; }

        [JsonPropertyName( "costPerHour" )]
        public int CostPerHour { get; set; }
    }
}
