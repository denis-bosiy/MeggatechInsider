using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Difference
{
    public sealed class DifferencesResponseDto
    {
        [JsonPropertyName( "differences" )]
        public List<DifferenceDto> Differences { get; set; }
    }
}
