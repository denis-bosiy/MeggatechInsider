using System.Text.Json.Serialization;

namespace Api.Models.Settings.SalarySettings
{
    public class SalarySettingsDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "coefficient" )]
        public int Coefficient { get; set; }
    }
}
