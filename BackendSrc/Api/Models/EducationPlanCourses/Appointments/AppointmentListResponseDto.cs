using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Appointments
{
    public class AppointmentListResponseDto
    {
        [JsonPropertyName( "appointments" )]
        public List<AppointmentDto> Appointments { get; set; }
    }
}
