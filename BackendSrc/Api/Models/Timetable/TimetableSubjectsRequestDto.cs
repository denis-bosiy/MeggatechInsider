using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableSubjectsRequestDto
{
    [Required]
    [JsonPropertyName("year")]
    public int Year { get; set; }
    
    [Required]
    [JsonPropertyName("week")]
    public int Week { get; set; }
}