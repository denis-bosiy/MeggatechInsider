using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.CompleteControl
{
    public sealed class CompleteControlContractDto
    {
        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [Required]
        [DisplayName( "subject" )]
        [JsonPropertyName( "subject" )]
        public string Subject { get; set; }

        [Required]
        [DisplayName( "classes" )]
        [JsonPropertyName( "classes" )]
        public List<int> Classes { get; set; }

        [Required]
        [DisplayName( "remoteHours" )]
        [JsonPropertyName( "remoteHours" )]
        public int RemoreHours { get; set; }

        [Required]
        [DisplayName( "combinedHours" )]
        [JsonPropertyName( "combinedHours" )]
        public int CombinedHours { get; set; }

        [Required]
        [DisplayName( "totalHours" )]
        [JsonPropertyName( "totalHours" )]
        public int TotalHours { get; set; }
    }
}
