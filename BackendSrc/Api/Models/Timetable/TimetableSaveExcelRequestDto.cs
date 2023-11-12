using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableSaveExcelRequestDto
{
    [Required]
    [DisplayName( "year" )]
    [JsonPropertyName( "year" )]
    public int Year { get; set; }

    [Required]
    [DisplayName( "week" )]
    [JsonPropertyName( "week" )]
    public int Week { get; set; }
}