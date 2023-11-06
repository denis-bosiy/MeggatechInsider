using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Subject
{
    public sealed class SubjectsResponseDto
    {
        [JsonPropertyName( "subjects" )]
        public List<SubjectDto> Subjects { get; set; }
    }
}
