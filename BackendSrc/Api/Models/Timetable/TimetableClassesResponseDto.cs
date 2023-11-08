using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableClassesResponseDto
{
    [JsonPropertyName( "classes" )]
    public List<ClassInfo> Classes { get; set; }
}

public class ClassInfo
{
    [JsonPropertyName( "classId" )]
    public int ClassId { get; set; }

    [JsonPropertyName( "className" )]
    public string ClassName { get; set; }
}