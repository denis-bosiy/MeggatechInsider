using System.Text.Json.Serialization;

namespace Api.Models.Timetable;

public class TimetablePairTimeRangesResponseDto
{
    [JsonPropertyName( "pairTimeRanges" )]
    public List<PairTimeRange> PairTimeRanges { get; set; }
}

public class PairTimeRange
{
    [JsonPropertyName( "id" )]
    public int Id { get; set; }
    
    [JsonPropertyName( "startTime" )]
    public TimeOnly StartTime { get; set; }

    [JsonPropertyName( "endTime" )]
    public TimeOnly EndTime { get; set; }
}