using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherEducation
{
    public class CreateTeacherEducationDto
    {
        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "coefficient" )]
        [JsonPropertyName( "coefficient" )]
        public int Coefficient { get; set; }
    }
}
