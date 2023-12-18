using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Teacher
{
    public class CourseTeacherListResponseDto
    {
        [JsonPropertyName( "teachers" )]
        public List<CourseTeacherDto> Teachers { get; set; }
    }
}
