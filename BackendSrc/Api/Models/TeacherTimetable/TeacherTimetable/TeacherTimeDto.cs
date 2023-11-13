using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable.TeacherTimetable
{
    public class TeacherTimeDto
    {
        [Required]
        [DisplayName( "teacherId" )]
        [JsonPropertyName( "teacherId" )]
        public int TeacherId { get; set; }

        [Required]
        [DisplayName( "availableHours" )]
        [JsonPropertyName( "availableHours" )]
        public List<AvailableHoursDto> AvailableHours { get; set; }
    }
}
