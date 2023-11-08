using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableLessonTimeRangesResponseDto
{
    public List<LessonTimeRange> LessonTimeRanges { get; set; }
}

public class LessonTimeRange
{
    [JsonPropertyName("startTime")]
    public TimeOnly StartTime { get; set; }
    
    [JsonPropertyName("endTime")]
    public TimeOnly EndTime { get; set; }
    
    [JsonPropertyName("id")]
    public int Id { get; set; }

}