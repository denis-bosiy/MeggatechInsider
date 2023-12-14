using System.Text.Json.Serialization;

namespace Api.Models.Settings.SalarySettings
{
    public class ListSalarySettingsResponseDto
    {
        [JsonPropertyName( "salaries" )]
        public List<SalarySettingsDto> Salaries { get; set; }
    }
}
