using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.PairTime
{
    public class PairTimeDto
    {
        [Required]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [JsonPropertyName( "startTime" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [JsonPropertyName( "endTime" )]
        public TimeOnly EndTime { get; set; }
    }
}
