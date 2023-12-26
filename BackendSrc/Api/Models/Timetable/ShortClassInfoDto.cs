using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class ShortClassInfoDto
{
    [Required]
    [DisplayName( "classId" )]
    [JsonPropertyName( "classId" )]
    public string ClassId { get; set; }
}