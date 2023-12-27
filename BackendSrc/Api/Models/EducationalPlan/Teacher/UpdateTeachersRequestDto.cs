using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Teacher
{
    public class UpdateTeachersRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "teachers" )]
        [JsonPropertyName( "teachers" )]
        public List<UpdateTeacherDto> Teachers { get; set; }
    }
}
