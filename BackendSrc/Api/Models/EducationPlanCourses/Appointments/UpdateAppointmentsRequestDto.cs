using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Appointments
{
    public class UpdateAppointmentsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [Required]
        [DisplayName( "appointments" )]
        [JsonPropertyName( "appointments" )]
        public List<UpdateAppointmentDto> Appointments { get; set; }
    }
}
