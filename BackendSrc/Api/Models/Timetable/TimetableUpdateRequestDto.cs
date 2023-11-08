using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableUpdateRequestDto
{
    [Required]
    [JsonPropertyName("weekDay")]
    public DayOfWeek WeekDay { get; set; }

    [Required]
    [JsonPropertyName("dayTime")]
    public TimeOnly DayTime { get; set; }

    [Required]
    [JsonPropertyName("class")]
    public List<ShortClassInfo> Class { get; set; }

    [Required]
    [JsonPropertyName("numberOfGroup")]
    public int NumberOfGroup { get; set; }

    [Required]
    [JsonPropertyName("currentGroup")]
    public int CurrentGroup { get; set; }

    [Required]
    [JsonPropertyName("subject")]
    public ShortSubjectInfo Subject { get; set; }

    [Required]
    [JsonPropertyName("classroom")]
    public int Classroom { get; set; }

    [Required]
    [JsonPropertyName("isOnline")]
    public bool IsOnline { get; set; }

    [Required]
    [JsonPropertyName("isParallel")]
    public bool IsParallel { get; set; }

    [Required]
    [JsonPropertyName("isClass")]
    public bool IsClass { get; set; }

    [Required]
    [JsonPropertyName("isGroup")]
    public bool IsGroup { get; set; }
}

public class ShortSubjectInfo
{
    [Required]
    [JsonPropertyName("teacher")]
    public string Teacher { get; set; }

    [Required]
    [JsonPropertyName("subjectName")]
    public string SubjectName { get; set; }
}