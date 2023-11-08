using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableUpdateRequestDto
{
    [Required]
    [DisplayName( "weekDay" )]
    [JsonPropertyName( "weekDay" )]
    public DayOfWeek WeekDay { get; set; }

    [Required]
    [DisplayName( "dayTime" )]
    [JsonPropertyName( "dayTime" )]
    public TimeOnly DayTime { get; set; }

    [Required]
    [DisplayName( "class" )]
    [JsonPropertyName( "class" )]
    public List<ShortClassInfoDto> Class { get; set; }

    [Required]
    [DisplayName( "numberOfGroup" )]
    [JsonPropertyName( "numberOfGroup" )]
    public int NumberOfGroup { get; set; }

    [Required]
    [DisplayName( "currentGroup" )]
    [JsonPropertyName( "currentGroup" )]
    public int CurrentGroup { get; set; }

    [Required]
    [DisplayName( "subject" )]
    [JsonPropertyName( "subject" )]
    public ShortSubjectInfoDto Subject { get; set; }

    [Required]
    [DisplayName( "classroom" )]
    [JsonPropertyName( "classroom" )]
    public int Classroom { get; set; }

    [Required]
    [DisplayName( "isOnline" )]
    [JsonPropertyName( "isOnline" )]
    public bool IsOnline { get; set; }

    [Required]
    [DisplayName( "isParallel" )]
    [JsonPropertyName( "isParallel" )]
    public bool IsParallel { get; set; }

    [Required]
    [DisplayName( "isClass" )]
    [JsonPropertyName( "isClass" )]
    public bool IsClass { get; set; }

    [Required]
    [DisplayName( "isGroup" )]
    [JsonPropertyName( "isGroup" )]
    public bool IsGroup { get; set; }
}

public class ShortSubjectInfoDto
{
    [Required]
    [DisplayName( "teacher" )]
    [JsonPropertyName( "teacher" )]
    public string Teacher { get; set; }

    [Required]
    [DisplayName( "subjectName" )]
    [JsonPropertyName( "subjectName" )]
    public string SubjectName { get; set; }
}