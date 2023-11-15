using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetableWeeksResponseDto
{
    [JsonPropertyName( "weeks" )]
    public List<WeekInfoDto> Weeks { get; set; }
}

public class WeekInfoDto
{
    [JsonPropertyName( "week" )]
    public int Week { get; set; }

    [JsonPropertyName( "content" )]
    public string Content { get; set; }
}