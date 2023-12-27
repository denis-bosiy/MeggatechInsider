using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public class UpdateAssignmentRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "classNumber" )]
        [JsonPropertyName( "teacherName" )]
        public int ClassNumber { get; set; }

        [Required]
        [DisplayName( "assignings" )]
        [JsonPropertyName( "assignings" )]
        public List<UpdateAssignmentDto> Assignments { get; set; }
    }
}
