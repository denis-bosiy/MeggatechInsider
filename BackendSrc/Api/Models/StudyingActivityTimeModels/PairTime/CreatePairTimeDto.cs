using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.PairTime
{
    public class CreatePairTimeDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "start_time" )]
        [JsonPropertyName( "start_time" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [DisplayName( "end_time" )]
        [JsonPropertyName( "end_time" )]
        public TimeOnly EndTime { get; set; }
    }
}
