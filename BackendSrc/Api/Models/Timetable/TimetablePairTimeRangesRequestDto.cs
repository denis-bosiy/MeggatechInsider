using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetablePairTimeRangesRequestDto
{
    [Required]
    [JsonPropertyName("year")]
    public int Year { get; set; }
}