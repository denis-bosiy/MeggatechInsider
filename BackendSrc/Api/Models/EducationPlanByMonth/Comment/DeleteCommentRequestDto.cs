using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.Comment
{
    public sealed class DeleteCommentRequestDto
    {
        [Required]
        [DisplayName( "commentId" )]
        [JsonPropertyName( "commentId" )]
        public string CommentId { get; set; }
    }
}
