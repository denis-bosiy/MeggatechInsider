using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Subject
{
    public class UpdateSubjectsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "subjects" )]
        [JsonPropertyName( "subjects" )]
        public List<SubjectDto> Subjects { get; set; }
    }
}
