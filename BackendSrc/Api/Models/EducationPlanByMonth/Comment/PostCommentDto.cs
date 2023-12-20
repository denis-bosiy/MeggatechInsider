using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.Comment
{
    public sealed class PostCommentDto
    {
        [Required]
        [DisplayName( "teacherId" )]
        [JsonPropertyName( "teacherId" )]
        public int TeacherId { get; set; }

        [Required]
        [DisplayName( "month" )]
        [JsonPropertyName( "month" )]
        public int Month {  get; set; }

        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "comment" )]
        [JsonPropertyName( "comment" )]
        public string Comment { get; set; }
    }
}
