using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.Timesheet
{
    public sealed class TimesheetRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }


        [Required]
        [DisplayName( "month" )]
        [JsonPropertyName( "month" )]
        public int Month { get; set; }


        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }
    }
}
