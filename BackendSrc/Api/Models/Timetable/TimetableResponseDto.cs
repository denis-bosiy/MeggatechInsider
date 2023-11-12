using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableResponseDto
{
    [JsonPropertyName( "cells" )]
    public List<CellDto> Cells { get; set; }

    [JsonPropertyName( "schoolMeeting" )]
    public SchoolMeetingDto SchoolMeeting { get; set; }
}

public class CellDto
{
    [JsonPropertyName( "cellId" )]
    public int CellId { get; set; }

    [JsonPropertyName( "weekDay" )]
    public DayOfWeek WeekDay { get; set; }

    [JsonPropertyName( "startTime" )]
    public TimeOnly StartTime { get; set; }

    [JsonPropertyName( "endTime" )]
    public TimeOnly EndTime { get; set; }

    [JsonPropertyName( "class" )]
    public List<ShortClassInfoDto> Class { get; set; }

    [JsonPropertyName( "numberOfGroup" )]
    public int NumberOfGroup { get; set; }

    [JsonPropertyName( "currentGroup" )]
    public int CurrentGroup { get; set; }

    [JsonPropertyName( "subject" )]
    public SubjectDto Subject { get; set; }

    [JsonPropertyName( "classroom" )]
    public int Classroom { get; set; }

    [JsonPropertyName( "isOnline" )]
    public bool IsOnline { get; set; }

    [JsonPropertyName( "isParallel" )]
    public bool IsParallel { get; set; }

    [JsonPropertyName( "isClass" )]
    public bool IsClass { get; set; }

    [JsonPropertyName( "isGroup" )]
    public bool IsGroup { get; set; }
}

public class SubjectDto
{
    [JsonPropertyName( "subjectId" )]
    public int SubjectId { get; set; }

    [JsonPropertyName( "teacherName" )]
    public string TeacherName { get; set; }

    [JsonPropertyName( "subjectName" )]
    public string SubjectName { get; set; }
}

public class SchoolMeetingDto
{
    [JsonPropertyName( "text" )]
    public string Text { get; set; }

    [JsonPropertyName( "weekDay" )]
    public DayOfWeek WeekDay { get; set; }

    [JsonPropertyName( "startTime" )]
    public TimeOnly StartTime { get; set; }

    [JsonPropertyName( "endTime" )]
    public TimeOnly EndTime { get; set; }
}