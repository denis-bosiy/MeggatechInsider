using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.StudyingActivityTimeModels.LessonTime
{
    public class LessonTimeDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "start_time" )]
        [JsonPropertyName( "start_time" )]
        public TimeOnly StartTime { get; set; }

        [Required]
        [DisplayName( "end_time" )]
        [JsonPropertyName( "end_time" )]
        public TimeOnly EndTime { get; set; }
    }
}
