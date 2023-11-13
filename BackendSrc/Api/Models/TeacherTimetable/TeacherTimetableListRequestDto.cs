using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class TeacherTimetableListRequestDto
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
