using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Teacher
{
    public class CourseTeacherUpdateListRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "teachers" )]
        [JsonPropertyName( "teachers" )]
        public List<CourseTeacherUpdateRequestDto> Teachers { get; set; }
    }
}
