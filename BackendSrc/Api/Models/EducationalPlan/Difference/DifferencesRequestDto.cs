using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Difference
{
    public sealed class DifferencesRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }
    }
}
