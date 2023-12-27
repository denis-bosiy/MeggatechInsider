using System.Text.Json.Serialization;

namespace Api.Models.Settings.TypesContracts
{
    public class TypeContractDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }
    }
}
