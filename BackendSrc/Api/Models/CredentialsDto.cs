using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models
{
    public sealed class CredentialsDto
    {
        [Required]
        [DisplayName( "password" )]
        [JsonPropertyName( "password" )]
        public string Password { get; set; }
    }
}
