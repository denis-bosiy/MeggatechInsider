namespace Core.Models.TeacherEntities;

public class Teacher : Entity
{
    public string Name { get; set; }
    public int CategoryId { get; set; }
    public bool CategoryAffectsOnSalary { get; set; }
    public int ContractTypeId { get; set; }
    public bool ContractTypeAffectsOnSalary { get; set; }
    public int EducationId { get; set; }
    public bool IsClassTeacher { get; set; }
    public bool AdvancedSubjectsAffectOnSalary { get; set; }
    public bool EgeAffectsOnSalary { get; set; }
    public DateOnly EmploymentDate { get; set; }
    public int ExperienceInYearsOnEmploymentDate { get; set; }
    public DateOnly BirthdayDate { get; set; }
}