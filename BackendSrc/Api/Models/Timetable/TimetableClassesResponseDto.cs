using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableClassesResponseDto
{
    [JsonPropertyName( "classes" )]
    public List<ClassInfoDto> Classes { get; set; }
}

public class ClassInfoDto
{
    [JsonPropertyName( "classId" )]
    public int ClassId { get; set; }

    [JsonPropertyName( "className" )]
    public string ClassName { get; set; }
}