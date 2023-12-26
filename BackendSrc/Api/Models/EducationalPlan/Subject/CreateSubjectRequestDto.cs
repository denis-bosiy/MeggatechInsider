using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Subject
{
    public class CreateSubjectRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "financing" )]
        [JsonPropertyName( "financing" )]
        public string Financing { get; set; }

        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [Required]
        [DisplayName( "category" )]
        [JsonPropertyName( "category" )]
        public string Category { get; set; }

        [Required]
        [DisplayName( "surchargeForNotebooks" )]
        [JsonPropertyName( "surchargeForNotebooks" )]
        public int SurchargeForNotebooks { get; set; }

        [Required]
        [DisplayName( "numberOf10" )]
        [JsonPropertyName( "numberOf10" )]
        public int NumberOf10 { get; set; }

        [Required]
        [DisplayName( "numberOfGroupsIn10" )]
        [JsonPropertyName( "numberOfGroupsIn10" )]
        public int NumberOfGroupsIn10 { get; set; }

        [Required]
        [DisplayName( "numberOf11" )]
        [JsonPropertyName( "numberOf11" )]
        public int NumberOf11 {  get; set; }

        [Required]
        [DisplayName( "numberOfGroupsIn11" )]
        [JsonPropertyName( "numberOfGroupsIn11" )]
        public int NumberOfGroupsIn11 { get; set; }

        [Required]
        [DisplayName( "isFinalExam" )]
        [JsonPropertyName( "isFinalExam" )]
        public bool IsFinalExam { get; set; }
    }
}
