using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherEducation
{
    public class DeleteTeacherEducationRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }
    }
}
