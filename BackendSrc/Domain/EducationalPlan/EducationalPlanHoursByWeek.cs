namespace Domain.EducationalPlan;

public class EducationalPlanHoursByWeek : Entity
{
    public EducationalPlan EducationalPlan { get; set; }
    public int EducationalPlanId { get; set; }
    public DateOnly WeekStartDate { get; set; }
    public int HoursCount { get; set; }
}