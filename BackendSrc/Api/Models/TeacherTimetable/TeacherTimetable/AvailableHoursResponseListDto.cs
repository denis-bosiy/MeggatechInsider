using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable.TeacherTimetable
{
    public class AvailableHoursResponseListDto
    {
        [JsonPropertyName( "availableHours" )]
        public List<AvailableHoursDto> AvailableHours { get; set; }
    }
}
