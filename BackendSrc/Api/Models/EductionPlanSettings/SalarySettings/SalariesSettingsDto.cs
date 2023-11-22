using System.Text.Json.Serialization;

namespace Api.Models.EductionPlanSettings.SalarySettings
{
    public class SalariesSettingsDto
    {
        [JsonPropertyName( "salaries" )]
        public List<SalarySettingsDto> Salaries { get; set; }
    }

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
