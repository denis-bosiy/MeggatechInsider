using System.Text.Json.Serialization;

namespace Api.Models.Settings.TypesContracts
{
    public class TypesContractsListResponseDto
    {
        [JsonPropertyName( "contractTypes" )]
        public List<TypeContractDto> TypesContracts { get; set; }
    }
}
