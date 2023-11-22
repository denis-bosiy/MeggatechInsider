using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Difference
{
    public sealed class DifferenceDto
    {
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "groupCount" )]
        public int GroupsCount { get; set; }

        [JsonPropertyName( "groupCountByPlan" )]
        public int PlanGroupsCount { get; set; }
    }
}
