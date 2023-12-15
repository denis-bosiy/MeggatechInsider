using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Plan
{
    public class EducationalPlanDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "financing" )]
        public string Financing { get; set; }

        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [JsonPropertyName( "numberOfGroups" )]
        public int NumberOfGroups { get; set; }

        [JsonPropertyName( "hoursOf1Quarter" )]
        public List<int> HoursOf1Quarter { get; set; }

        [JsonPropertyName( "hoursOf2Quarter" )]
        public List<int> HoursOf2Quarter { get; set; }

        [JsonPropertyName( "hoursOf3Quarter" )]
        public List<int> HoursOf3Quarter { get; set; }

        [JsonPropertyName( "hoursOf4Quarter" )]
        public List<int> HoursOf4Quarter { get; set; }
    }
}
