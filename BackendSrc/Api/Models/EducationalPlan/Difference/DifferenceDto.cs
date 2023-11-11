using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Difference
{
    public sealed class DifferenceDto
    {
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "group_count" )]
        public int GroupsCount { get; set; }

        [JsonPropertyName( "group_count_by_plan" )]
        public int PlanGroupsCount { get; set; }
    }
}
