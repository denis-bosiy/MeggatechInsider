using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public sealed class AssignmentsResponseDto
    {
        [JsonPropertyName( "appointments" )]
        public List<AssignmentDto> Assignments { get; set; }
    }
}
