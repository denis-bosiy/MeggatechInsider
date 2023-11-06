using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Subject
{
    public sealed class SubjectDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "financing" )]
        public string Financing { get; set; }

        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [JsonPropertyName( "category" )]
        public string Category { get; set; }

        [JsonPropertyName( "surcharge_for_notebooks" )]
        public int NotebooksSurcharge { get; set; }

        [JsonPropertyName( "number_of_10" )]
        public int TenthCount { get; set; }

        [JsonPropertyName( "number_of_groups_in_10" )]
        public int TenthGroupsCount { get; set; }

        [JsonPropertyName( "number_of_11" )]
        public int EleventhNumber { get; set; }

        [JsonPropertyName( "number_of_groups_in_11" )]
        public int EleventhGroupsCount { get; set; }

        [JsonPropertyName( "is_final_exam" )]
        public bool IsFinalExam { get; set; }
    }
}
