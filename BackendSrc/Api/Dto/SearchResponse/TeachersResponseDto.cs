using System.Runtime.Serialization;

namespace Api.Dto.SearchResponse;

[DataContract]
public class TeachersResponseDto
{
    public TeachersResponseDto(
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

    [DataMember( Name = "name" )] public string TeacherName { get; set; }

    [DataMember( Name = "category" )] public string TeacherCategoryName { get; set; }

    [DataMember( Name = "category_payroll_accounting" )]
    public bool TeacherCategoryAffectsOnSalary { get; set; }

    [DataMember( Name = "working_contract" )]
    public string ContractTypeName { get; set; }

    [DataMember( Name = "working_contract_payroll_accounting" )]
    public bool ContractTypeAffectsOnSalary { get; set; }

    [DataMember( Name = "education" )] public string EducationName { get; set; }

    [DataMember( Name = "is_classroom_teacher" )]
    public bool IsClassTeacher { get; set; }

    [DataMember( Name = "in_depth_subject_payroll_accounting" )]
    public bool AdvancedSubjectsAffectOnSalary { get; set; }

    [DataMember( Name = "final_exam_payroll_accounting" )]
    public bool EgeAffectsOnSalary { get; set; }

    [DataMember( Name = "working_start_date" )]
    public DateOnly EmploymentDate { get; set; }

    [DataMember( Name = "work_experience" )]
    public int ExperienceInYears { get; set; }

    [DataMember( Name = "work_experience_at_the_time_of_the_employment" )]
    public int ExperienceInYearsOnEmploymentDate { get; set; }
}