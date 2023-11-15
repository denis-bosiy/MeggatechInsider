using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Teacher;

public class TeachersRequestDto
{
    [Required]
    [DisplayName( "year" )]
    [JsonPropertyName( "year" )]
    public int Year { get; set; }
}