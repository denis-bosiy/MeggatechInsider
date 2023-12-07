using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Difference
{
    public class DifferenceCourseDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "groupCount" )]
        public int GroupCount { get; set; }

        [JsonPropertyName( "groupCountByPlan" )]
        public int GroupCountByPlan { get; set; }
    }
}
