using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TypesContracts
{
    public class TypesContractsRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }
    }
}
