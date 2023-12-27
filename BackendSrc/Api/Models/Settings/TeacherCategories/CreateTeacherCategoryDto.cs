using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherCategories
{
    public class CreateTeacherCategoryDto
    {
        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "coefficient" )]
        [JsonPropertyName( "coefficient" )]
        public int Coefficient { get; set; }
    }
}
