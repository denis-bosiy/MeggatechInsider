using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.SalarySettings
{
    public class UpdateSalariesSettingsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "salaries" )]
        [JsonPropertyName( "salaries" )]
        public List<SalarySettingsDto> Salaries { get; set; }
    }
}
