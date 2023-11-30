using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlan.Teacher
{
    public class TeacherCreateRequestDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year {  get; set; }

        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "workingContract" )]
        [JsonPropertyName( "workingContract" )]
        public string WorkingContract { get; set; }

        [Required]
        [DisplayName( "workingStartDate" )]
        [JsonPropertyName( "workingStartDate" )]
        public DateOnly WorkingStartDate { get; set; }

        [Required]
        [DisplayName( "workExperience" )]
        [JsonPropertyName( "workExperience" )]
        public int WorkExperience { get; set; }

        [Required]
        [DisplayName( "workExperienceAtTheTimeOfTheEmployment" )]
        [JsonPropertyName( "workExperienceAtTheTimeOfTheEmployment" )]
        public int WorkExperienceAtTheTimeOfTheEmployment { get; set; }

        [Required]
        [DisplayName( "birthDay" )]
        [JsonPropertyName( "birthDay" )]
        public DateOnly BirthDay { get; set; }

        [Required]
        [DisplayName( "age" )]
        [JsonPropertyName( "age" )]
        public int Age { get; set; }
    }
}
