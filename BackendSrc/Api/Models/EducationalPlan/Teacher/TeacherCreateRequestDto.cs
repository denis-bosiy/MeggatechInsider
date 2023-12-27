using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Teacher
{
    public class TeacherCreateRequestDto
    {
        [Required]
        [DisplayName( "year" )]
        [JsonPropertyName( "year" )]
        public int Year {  get; set; }

        [Required]
        [DisplayName( "name" )]
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [Required]
        [DisplayName( "category" )]
        [JsonPropertyName( "category" )]
        public string Category { get; set; }

        [Required]
        [DisplayName( "categoryPayrollAccounting" )]
        [JsonPropertyName( "categoryPayrollAccounting" )]
        public bool CategoryPayrollAccounting { get; set; }

        [Required]
        [DisplayName( "workingContract" )]
        [JsonPropertyName( "workingContract" )]
        public string WorkingContract { get; set; }

        [Required]
        [DisplayName( "workingContractPayrollAccounting" )]
        [JsonPropertyName( "workingContractPayrollAccounting" )]
        public bool WorkingContractPayrollAccounting { get; set; }

        [Required]
        [DisplayName( "education" )]
        [JsonPropertyName( "education" )]
        public string Education { get; set; }

        [Required]
        [DisplayName( "isClassroomTeacher" )]
        [JsonPropertyName( "isClassroomTeacher" )]
        public bool IsClassroomTeacher { get; set; }

        [Required]
        [DisplayName( "inDepthSubjectPayrollAccounting" )]
        [JsonPropertyName( "inDepthSubjectPayrollAccounting" )]
        public bool InDepthSubjectPayrollAccounting { get; set; }

        [Required]
        [DisplayName( "workingStartDate" )]
        [JsonPropertyName( "workingStartDate" )]
        public DateOnly WorkingStartDate { get; set; }

        [Required]
        [DisplayName( "egeAffectsOnSalary" )]
        [JsonPropertyName( "egeAffectsOnSalary" )]
        public bool EgeAffectsOnSalary { get; set; }

        [Required]
        [DisplayName( "workingExperienceAtTheTimeOfTheEmployment" )]
        [JsonPropertyName( "workingExperienceAtTheTimeOfTheEmployment" )]
        public int WorkingExperienceAtTheTimeOfTheEmployment { get; set; }

        [Required]
        [DisplayName( "birthDay" )]
        [JsonPropertyName( "birthDay" )]
        public DateOnly BirthDay { get; set; }
    }
}
