using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class ShortClassInfo
{
    [Required]
    [JsonPropertyName("classId")]
    public int ClassId { get; set; }
}