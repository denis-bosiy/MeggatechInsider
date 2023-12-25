using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Plan
{
    public class EducationalPlanRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "class" )]
        [JsonPropertyName( "class" )]
        public int Class {  get; set; }
    }
}
