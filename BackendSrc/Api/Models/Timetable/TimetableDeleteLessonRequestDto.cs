using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableDeleteLessonRequestDto
{
    [Required]
    [DisplayName( "cellId" )]
    [JsonPropertyName( "cellId" )]
    public int CellId { get; set; }

    [Required]
    [DisplayName( "class" )]
    [JsonPropertyName( "class" )]
    public List<ShortClassInfoDto> Class { get; set; }
}