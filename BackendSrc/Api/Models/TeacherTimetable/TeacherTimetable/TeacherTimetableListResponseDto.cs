using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable.TeacherTimetable
{
    public class TeacherTimetableListResponseDto
    {
        [JsonPropertyName( "teachers" )]
        public List<TeacherTimetableDto> Teachers { get; set; }
    }
}