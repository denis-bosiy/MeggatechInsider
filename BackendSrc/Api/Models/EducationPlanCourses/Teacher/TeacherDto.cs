using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanCourses.Teacher
{
    public class TeacherDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "workingContract" )]
        public string WorkingContract { get; set; }

        [JsonPropertyName( "workingStartDate" )]
        public DateOnly WorkingStartDate { get; set; }

        [JsonPropertyName( "workExperience" )]
        public int WorkExperience { get; set; }

        [JsonPropertyName( "workExperienceAtTheTimeOfTheEmployment" )]
        public int WorkExperienceAtTheTimeOfTheEmployment { get; set; }

        [JsonPropertyName( "birthDay" )]
        public DateOnly BirthDay { get; set; }

        [JsonPropertyName( "age" )]
        public int Age { get; set; }
    }
}
