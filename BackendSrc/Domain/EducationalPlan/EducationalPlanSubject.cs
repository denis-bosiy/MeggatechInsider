using Domain.SubjectEntities;

namespace Domain.EducationalPlan;

public class EducationalPlanSubject : Entity
{
    public Subject Subject { get; set; }
    public int SubjectId { get; set; }
    public List<EducationalPlanHoursByWeek> EducationalPlanHours { get; set; }
}