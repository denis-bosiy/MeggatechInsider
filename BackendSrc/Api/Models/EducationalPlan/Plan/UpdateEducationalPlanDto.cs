using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Plan
{
    public class UpdateEducationalPlanDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "hoursOf1Quarter" )]
        [JsonPropertyName( "hoursOf1Quarter" )]
        public List<int> HoursOf1Quarter { get; set; }

        [Required]
        [DisplayName( "hoursOf2Quarter" )]
        [JsonPropertyName( "hoursOf2Quarter" )]
        public List<int> HoursOf2Quarter { get; set; }

        [Required]
        [DisplayName( "hoursOf3Quarter" )]
        [JsonPropertyName( "hoursOf3Quarter" )]
        public List<int> HoursOf3Quarter { get; set; }

        [Required]
        [DisplayName( "hoursOf4Quarter" )]
        [JsonPropertyName( "hoursOf4Quarter" )]
        public List<int> HoursOf4Quarter { get; set; }
    }
}
