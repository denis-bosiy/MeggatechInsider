using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableWeeksRequestDto
{
    [Required]
    [JsonPropertyName("Year")]
    public int Year { get; set; }
}