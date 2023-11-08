using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableSubjectsResponseDto
{
    public List<SubjectInfo> Subjects { get; set; }
}

public class SubjectInfo
{
    [JsonPropertyName("subjectId")]
    public int SubjectId { get; set; }
    
    [JsonPropertyName("teacherName")]
    public string TeacherName { get; set; }
    
    [JsonPropertyName("subjectName")]
    public string SubjectName { get; set; }
}