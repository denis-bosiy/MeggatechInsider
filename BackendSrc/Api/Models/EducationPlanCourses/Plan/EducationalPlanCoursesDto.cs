using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Plan
{
    public class EducationalPlanCoursesDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName( "subjectName" )]
        public string Name { get; set; }

        [JsonPropertyName( "subjectType" )]
        public string Type { get; set; }

        [JsonPropertyName( "groupsCount" )]
        public int GroupsCount { get; set; }

        [JsonPropertyName( "hoursTotal" )]
        public int HoursTotal { get; set; }

        [JsonPropertyName( "hoursAwaited" )]
        public int HoursAwaited { get; set; }

        [JsonPropertyName( "hoursPlanned" )]
        public int HoursPlanned { get; set; }

        [JsonPropertyName( "weeksPlan" )]
        public List<int> WeeksPlan {  get; set; }
    }
}
