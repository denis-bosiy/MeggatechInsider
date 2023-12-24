namespace Domain.EducationalPlan;

public class EducationalPlan : Entity
{
    public List<EducationalPlanSubject> Subjects { get; set; }
    public int ClassNumber { get; set; }
    public int Year { get; set; }
}