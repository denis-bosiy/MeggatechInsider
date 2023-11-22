using System.Text.Json.Serialization;

namespace Api.Models.EductionPlanSettings.SalarySettings
{
    public class PutSalariesSettingsDto
    {
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [JsonPropertyName( "salaries" )]
        public List<SalarySettingsDto> Salaries { get; set; }
    }
}
