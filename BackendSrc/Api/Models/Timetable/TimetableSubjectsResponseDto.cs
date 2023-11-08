using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableSubjectsResponseDto
{
    [JsonPropertyName( "subjects" )]
    public List<SubjectInfoDto> Subjects { get; set; }
}

public class SubjectInfoDto
{
    [JsonPropertyName( "subjectId" )]
    public int SubjectId { get; set; }

    [JsonPropertyName( "teacherName" )]
    public string TeacherName { get; set; }

    [JsonPropertyName( "subjectName" )]
    public string SubjectName { get; set; }
}