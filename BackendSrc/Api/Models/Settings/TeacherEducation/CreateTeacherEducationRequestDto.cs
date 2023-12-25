using Api.Models.Settings.TeacherCategories;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherEducation
{
    public class CreateTeacherEducationRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "education" )]
        [JsonPropertyName( "education" )]
        public CreateTeacherEducationDto Education { get; set; }
    }
}
