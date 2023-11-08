using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TImetableClassesRequestDto
{
    [Required]
    [DisplayName( "year" )]
    [JsonPropertyName( "year" )]
    public string Year { get; set; }
}