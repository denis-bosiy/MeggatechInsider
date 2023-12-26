using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherCategories
{
    public class TeacherCategoriesResponseDto
    {
        [JsonPropertyName( "categories" )]
        public List<CategoryTeacherDto> Categories { get; set; }
    }
}
