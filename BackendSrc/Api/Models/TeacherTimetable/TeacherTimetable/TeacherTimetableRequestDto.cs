using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable.TeacherTimetable
{
    public class TeacherTimetableRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "week" )]
        [JsonPropertyName( "week" )]
        public int Week { get; set; }
    }
}
