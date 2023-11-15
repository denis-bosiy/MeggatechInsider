using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableLessonTimeRangesResponseDto
{
    public List<LessonTimeRangeDto> LessonTimeRanges { get; set; }
}

public class LessonTimeRangeDto
{
    [JsonPropertyName( "id" )]
    public int Id { get; set; }

    [JsonPropertyName( "startTime" )]
    public TimeOnly StartTime { get; set; }

    [JsonPropertyName( "endTime" )]
    public TimeOnly EndTime { get; set; }
}