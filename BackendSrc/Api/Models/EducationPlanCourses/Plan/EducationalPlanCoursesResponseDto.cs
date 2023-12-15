using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Plan
{
    public class EducationalPlanCoursesResponseDto
    {
        [JsonPropertyName("subjects")]
        public List<EducationalPlanCoursesDto> Subjects { get; set; }

        [JsonPropertyName( "weekStartDates" )]
        public List<string> WeekStartDates {  get; set; }
    }
}
