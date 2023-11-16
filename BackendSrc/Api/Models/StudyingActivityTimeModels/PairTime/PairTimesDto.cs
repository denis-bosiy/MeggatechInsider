using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.PairTime
{
    public class PairTimesDto
    {
        [JsonPropertyName( "pairTimes" )]
        public List<PairTimeDto> PairTimes { get; set; }
    }
}
