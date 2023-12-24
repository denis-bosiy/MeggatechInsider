using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Appointments
{
    public class CreateAppointmentRequestDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "teacher" )]
        [JsonPropertyName( "teacher" )]
        public string Teacher { get; set; }

        [Required]
        [DisplayName( "groupCount" )]
        [JsonPropertyName( "groupCount" )]
        public int GroupCount { get; set; }

        [Required]
        [DisplayName( "costPerHour" )]
        [JsonPropertyName( "costPerHour" )]
        public int CostPerHour { get; set; }
    }
}
