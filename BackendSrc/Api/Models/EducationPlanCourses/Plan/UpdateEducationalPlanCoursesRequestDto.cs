using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Plan
{
    public class UpdateEducationalPlanCoursesRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "courseType" )]
        [JsonPropertyName( "courseType" )]
        public string CourseType { get; set; }

        [Required]
        [DisplayName( "weeksPlans" )]
        [JsonPropertyName( "weeksPlans" )]
        public List<WeekPlanDto> WeekPlans { get; set; }
    }
}
