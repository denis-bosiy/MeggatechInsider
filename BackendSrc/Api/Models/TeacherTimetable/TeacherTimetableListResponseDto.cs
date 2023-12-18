using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class TeacherTimetableListResponseDto
    {
        [JsonPropertyName( "teachers" )]
        public List<TeacherTimetableDto> TeachersTimetables { get; set; }
    }
}