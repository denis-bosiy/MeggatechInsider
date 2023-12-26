using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Plan
{
    public class EducationalPlanResponseDto
    {
        [JsonPropertyName( "types" )]
        public List<string> Types { get; set; }

        [JsonPropertyName( "numberOfWeeksIn1Quarter" )]
        public int NumberOfWeeksIn1Quarter { get; set; }

        [JsonPropertyName( "startOf1Quarter" )]
        public string StartOf1Quarter { get; set; }

        [JsonPropertyName( "numberOfWeeksIn2Quarter" )]
        public int NumberOfWeeksIn2Quarter { get; set; }

        [JsonPropertyName( "startOf2Quarter" )]
        public string StartOf2Quarter { get; set; }

        [JsonPropertyName( "numberOfWeeksIn3Quarter" )]
        public int NumberOfWeeksIn3Quarter { get; set; }

        [JsonPropertyName( "startOf3Quarter" )]
        public string StartOf3Quarter { get; set; }

        [JsonPropertyName( "numberOfWeeksIn4Quarter" )]
        public int NumberOfWeeksIn4Quarter { get; set; }

        [JsonPropertyName( "startOf4Quarter" )]
        public string StartOf4Quarter { get; set; }

        [JsonPropertyName( "plan" )]
        public List<EducationalPlanDto> plan { get; set; }

    }
}
