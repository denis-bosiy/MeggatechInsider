using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.PairTime
{
    public class PairTimesDto
    {
        [Required]
        [JsonPropertyName( "pair_times" )]
        public List<PairTimeDto> PairTimes { get; set; }
    }
}
