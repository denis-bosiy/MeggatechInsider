using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable;

public class AvailableHoursByWeekDayDto
{
    [JsonPropertyName( "weekDay" )]
    public DayOfWeek WeekDay { get; set; }

    [JsonPropertyName( "availableLessonTimesIds" )]
    public List<int> AvailableLessonTimesIds { get; set; } = new List<int>();

    [JsonPropertyName( "availablePairTimesIds" )]
    public List<int> AvailablePairTimesIds { get; set; } = new List<int>();
}