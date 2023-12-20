using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.CompleteControl
{
    public sealed class CompleteControlResponseDto
    {
        [Required]
        [DisplayName( "teacher" )]
        [JsonPropertyName( "teacher" )]
        public string Teacher {  get; set; }

        [Required]
        [DisplayName( "total" )]
        [JsonPropertyName( "total" )]
        public int Total { get; set; }

        [Required]
        [DisplayName( "totalRemoted" )]
        [JsonPropertyName( "totalRemoted" )]
        public int TotalRemoted { get; set; }

        [Required]
        [DisplayName( "totalCombined" )]
        [JsonPropertyName( "totalCombined" )]
        public int TotalCombined { get; set; }

        [Required]
        [DisplayName( "contracts" )]
        [JsonPropertyName( "contracts" )]
        public List<CompleteControlContractDto> Contracts { get; set; }
    }
}
