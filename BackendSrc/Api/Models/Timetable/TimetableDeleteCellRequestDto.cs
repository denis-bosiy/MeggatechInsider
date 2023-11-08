using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableDeleteCellRequestDto
{
    [Required]
    [JsonPropertyName("cellId")]
    public int CellId { get; set; }

    [Required]
    [JsonPropertyName("class")]
    public List<ShortClassInfo> Class { get; set; }
}