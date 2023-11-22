using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Teacher
{
    public class TeacherListResponseDto
    {
        [JsonPropertyName( "teachers" )]
        public List<TeacherDto> Teachers { get; set; }
    }
}
