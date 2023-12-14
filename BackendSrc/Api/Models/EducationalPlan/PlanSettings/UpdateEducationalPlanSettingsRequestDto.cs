using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.PlanSettings
{
    public class UpdateEducationalPlanSettingsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "numberOf10Classes" )]
        [JsonPropertyName( "numberOf10Classes" )]
        public int NumberOf10Classes { get; set; }

        [Required]
        [DisplayName( "numberOf11Classes" )]
        [JsonPropertyName( "numberOf11Classes" )]
        public int NumberOf11Classes { get; set; }

        [Required]
        [DisplayName( "numberOfWeeksIn1Quarter" )]
        [JsonPropertyName( "numberOfWeeksIn1Quarter" )]
        public int NumberOfWeeksIn1Quarter { get; set; }

        [Required]
        [DisplayName( "startOf1Quarter" )]
        [JsonPropertyName( "startOf1Quarter" )]
        public string StartOf1Quarter { get; set; }

        [Required]
        [DisplayName( "numberOfWeeksIn2Quarter" )]
        [JsonPropertyName( "numberOfWeeksIn2Quarter" )]
        public int NumberOfWeeksIn2Quarter { get; set; }

        [Required]
        [DisplayName( "startOf2Quarter" )]
        [JsonPropertyName( "startOf2Quarter" )]
        public string StartOf2Quarter { get; set; }

        [Required]
        [DisplayName( "numberOfWeeksIn3Quarter" )]
        [JsonPropertyName( "numberOfWeeksIn3Quarter" )]
        public int NumberOfWeeksIn3Quarter { get; set; }

        [Required]
        [DisplayName( "startOf3Quarter" )]
        [JsonPropertyName( "startOf3Quarter" )]
        public string StartOf3Quarter { get; set; }

        [Required]
        [DisplayName( "numberOfWeeksIn4Quarter" )]
        [JsonPropertyName( "numberOfWeeksIn4Quarter" )]
        public int NumberOfWeeksIn4Quarter { get; set; }

        [Required]
        [DisplayName( "startOf4Quarter" )]
        [JsonPropertyName( "startOf4Quarter" )]
        public string StartOf4Quarter { get; set; }

        [Required]
        [DisplayName( "numberOfWeeks" )]
        [JsonPropertyName( "numberOfWeeks" )]
        public int NumberOfWeeks { get; set; }
    }
}
