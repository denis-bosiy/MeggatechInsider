using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableLessonTimeRangesRequestDto
{
    [Required]
    [DisplayName( "year" )]
    [JsonPropertyName( "year" )]
    public int Year { get; set; }
}