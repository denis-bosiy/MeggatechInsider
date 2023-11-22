using System.Text.Json.Serialization;

namespace Api.Models.EductionPlanSettings.SalarySettings
{
    public class PostSalarySettingsDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "coefficient" )]
        public int Coefficient { get; set; }
    }
}
