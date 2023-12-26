using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public class CreateAsignmentRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "classNumber" )]
        [JsonPropertyName( "classNumber" )]
        public int ClassNumber { get; set; }

        [Required]
        [DisplayName( "teacherName" )]
        [JsonPropertyName( "teacherName" )]
        public string TeacherName { get; set; }

        [Required]
        [DisplayName( "subjectName" )]
        [JsonPropertyName( "subjectName" )]
        public string SubjectName { get; set; }

        [Required]
        [DisplayName( "groupCount" )]
        [JsonPropertyName( "groupCount" )]
        public int GroupCount { get; set; }
    }
}
