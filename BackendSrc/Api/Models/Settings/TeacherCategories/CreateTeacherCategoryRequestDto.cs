using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherCategories
{
    public class CreateTeacherCategoryRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "category" )]
        [JsonPropertyName( "category" )]
        public CreateTeacherCategoryDto Category { get; set; }
    }
}
