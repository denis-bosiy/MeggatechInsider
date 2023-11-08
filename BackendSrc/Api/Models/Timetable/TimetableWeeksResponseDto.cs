using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableWeeksResponseDto
{
    [JsonPropertyName("weeks")]
    public List<WeekInfo> Weeks { get; set; }
}

public class WeekInfo
{
    [JsonPropertyName("week")]
    public int Week { get; set; }
    
    [JsonPropertyName("content")]
    public string Content { get; set; }
}