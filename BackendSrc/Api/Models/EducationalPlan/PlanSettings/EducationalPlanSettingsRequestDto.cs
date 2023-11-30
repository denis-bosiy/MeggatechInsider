using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.PlanSettings
{
    public class EducationalPlanSettingsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }
    }
}
