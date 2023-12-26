using Api.Models.Settings.TeacherCategories;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherEducation
{
    public class TeacherEducationsResponseDto
    {
        [JsonPropertyName( "educations" )]
        public List<TeacherEducationDto> Educations { get; set; }
    }
}
