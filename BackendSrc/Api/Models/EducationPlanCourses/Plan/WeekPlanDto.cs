using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Plan
{
    public class WeekPlanDto
    {
        [Required]
        [DisplayName( "subjectId" )]
        [JsonPropertyName( "subjectId" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "weeksPlan" )]
        [JsonPropertyName( "weeksPlan" )]
        public List<int> WeeksPlan {  get; set; }
    }
}
