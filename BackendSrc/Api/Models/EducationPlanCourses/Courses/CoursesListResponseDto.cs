using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Courses
{
    public class CoursesListResponseDto
    {
        [JsonPropertyName( "courses" )]
        public List<CourseDto> Courses { get; set; }
    }
}
