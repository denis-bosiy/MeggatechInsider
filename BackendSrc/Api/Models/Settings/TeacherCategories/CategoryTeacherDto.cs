using System.Text.Json.Serialization;

namespace Api.Models.Settings.TeacherCategories
{
    public class CategoryTeacherDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "coefficient" )]
        public int Coefficient { get; set; }
    }
}
