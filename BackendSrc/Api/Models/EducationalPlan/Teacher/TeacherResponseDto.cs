using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Teacher;

public class TeachersResponseDto
{
    [JsonPropertyName( "teachers" )]
    public List<TeacherResponseDto> Teachers { get; set; }
}

public class TeacherResponseDto
{
    public TeacherResponseDto(
        int id,
        string teacherName,
        string teacherCategoryName,
        bool teacherCategoryAffectsOnSalary,
        string contractTypeName,
        bool contractTypeAffectsOnSalary,
        string educationName,
        bool isClassTeacher,
        bool advancedSubjectsAffectOnSalary,
        bool egeAffectsOnSalary,
        DateOnly employmentDate,
        int experienceInYears,
        int experienceInYearsOnEmploymentDate )
    {
        Id = id;
        TeacherName = teacherName;
        TeacherCategoryName = teacherCategoryName;
        TeacherCategoryAffectsOnSalary = teacherCategoryAffectsOnSalary;
        ContractTypeName = contractTypeName;
        ContractTypeAffectsOnSalary = contractTypeAffectsOnSalary;
        EducationName = educationName;
        IsClassTeacher = isClassTeacher;
        AdvancedSubjectsAffectOnSalary = advancedSubjectsAffectOnSalary;
        EgeAffectsOnSalary = egeAffectsOnSalary;
        EmploymentDate = employmentDate;
        ExperienceInYears = experienceInYears;
        ExperienceInYearsOnEmploymentDate = experienceInYearsOnEmploymentDate;
    }

    [JsonPropertyName( "id" )]
    public int Id { get; set; }

    [JsonPropertyName( "name" )]
    public string TeacherName { get; set; }

    [JsonPropertyName( "category" )]
    public string TeacherCategoryName { get; set; }

    [JsonPropertyName( "categoryPayrollAccounting" )]
    public bool TeacherCategoryAffectsOnSalary { get; set; }

    [JsonPropertyName( "workingContract" )]
    public string ContractTypeName { get; set; }

    [JsonPropertyName( "workingContractPayrollAccounting" )]
    public bool ContractTypeAffectsOnSalary { get; set; }

    [JsonPropertyName( "education" )]
    public string EducationName { get; set; }

    [JsonPropertyName( "isClassroomTeacher" )]
    public bool IsClassTeacher { get; set; }

    [JsonPropertyName( "inDepthSubjectPayrollAccounting" )]
    public bool AdvancedSubjectsAffectOnSalary { get; set; }

    [JsonPropertyName( "finalExamPayrollAccounting" )]
    public bool EgeAffectsOnSalary { get; set; }

    [JsonPropertyName( "workingStartDate" )]
    public DateOnly EmploymentDate { get; set; }

    [JsonPropertyName( "workExperience" )]
    public int ExperienceInYears { get; set; }

    [JsonPropertyName( "workExperienceAtTheTimeOfTheEmployment" )]
    public int ExperienceInYearsOnEmploymentDate { get; set; }
}