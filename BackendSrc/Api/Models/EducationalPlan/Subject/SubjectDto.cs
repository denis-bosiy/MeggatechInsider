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
        public string PaymentType { get; set; }

        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [JsonPropertyName( "category" )]
        public string Category { get; set; }

        [JsonPropertyName( "surchargeForNotebooks" )]
        public int NotebooksSurcharge { get; set; }

        [JsonPropertyName( "numberOf10" )]
        public int TenthCount { get; set; }

        [JsonPropertyName( "numberOfGroupsIn10" )]
        public int TenthGroupsCount { get; set; }

        [JsonPropertyName( "numberOf11" )]
        public int EleventhNumber { get; set; }

        [JsonPropertyName( "numberOfGroupsIn11" )]
        public int EleventhGroupsCount { get; set; }

        [JsonPropertyName( "isFinalExam" )]
        public bool IsFinalExam { get; set; }
    }
}
