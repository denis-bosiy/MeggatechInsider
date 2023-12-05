using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Courses
{
    public class CoursesCreateRequestDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year { get; set; }

        [Required]
        [DisplayName( "type" )]
        [JsonPropertyName( "type" )]
        public string Type { get; set; }

        [Required]
        [DisplayName( "hoursByPlan" )]
        [JsonPropertyName( "hoursByPlan" )]
        public int HoursByPlan { get; set; }

        [Required]
        [DisplayName( "numberOfGroups" )]
        [JsonPropertyName( "numberOfGroups" )]
        public int NumberOfGroups { get; set; }
    }
}
