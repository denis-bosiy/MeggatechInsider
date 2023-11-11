using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Teacher;

public class TeacherResponseDto
{
    public TeacherResponseDto(
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

    [JsonPropertyName( "name" )]
    public string TeacherName { get; set; }

    [JsonPropertyName( "category" )]
    public string TeacherCategoryName { get; set; }

    [JsonPropertyName( "category_payroll_accounting" )]
    public bool TeacherCategoryAffectsOnSalary { get; set; }

    [JsonPropertyName( "working_contract" )]
    public string ContractTypeName { get; set; }

    [JsonPropertyName( "working_contract_payroll_accounting" )]
    public bool ContractTypeAffectsOnSalary { get; set; }

    [JsonPropertyName( "education" )]
    public string EducationName { get; set; }

    [JsonPropertyName( "is_classroom_teacher" )]
    public bool IsClassTeacher { get; set; }

    [JsonPropertyName( "in_depth_subject_payroll_accounting" )]
    public bool AdvancedSubjectsAffectOnSalary { get; set; }

    [JsonPropertyName( "final_exam_payroll_accounting" )]
    public bool EgeAffectsOnSalary { get; set; }

    [JsonPropertyName( "working_start_date" )]
    public DateOnly EmploymentDate { get; set; }

    [JsonPropertyName( "work_experience" )]
    public int ExperienceInYears { get; set; }

    [JsonPropertyName( "work_experience_at_the_time_of_the_employment" )]
    public int ExperienceInYearsOnEmploymentDate { get; set; }
}