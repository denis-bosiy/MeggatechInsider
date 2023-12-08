using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Difference
{
    public class DifferenceCourseListResponseDto
    {
        [JsonPropertyName( "differences" )]
        public List<DifferenceCourseDto> Differences { get; set; }
    }
}
