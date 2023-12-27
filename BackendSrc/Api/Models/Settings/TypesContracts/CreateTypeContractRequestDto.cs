using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TypesContracts
{
    public class CreateTypeContractRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "contractType" )]
        [JsonPropertyName( "contractType" )]
        public string Type { get; set; }
    }
}
