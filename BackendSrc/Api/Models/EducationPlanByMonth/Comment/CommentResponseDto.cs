using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.Comment
{
    public sealed class CommentResponseDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public string Id { get; set; }

        [Required]
        [DisplayName( "message" )]
        [JsonPropertyName( "message" )]
        public string Message { get; set; }
    }
}
