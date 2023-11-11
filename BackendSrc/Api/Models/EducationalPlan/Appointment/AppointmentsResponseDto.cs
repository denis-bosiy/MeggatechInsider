using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public sealed class AppointmentsResponseDto
    {
        [JsonPropertyName( "appointments" )]
        public List<AppointmentDto> Appointments { get; set; }
    }
}
