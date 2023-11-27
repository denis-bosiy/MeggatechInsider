namespace Domain.CourseEntities.CourseEducationalPlans
{
    public class CoursesEducationalPlanHours : Entity
    {
        public CoursesEducationalPlan CoursesEducationalPlan { get; set; }
        public int CoursesEducationalPlanId => CoursesEducationalPlan.Id;
        public DateOnly WeekStartDate { get; set; }
        public int HoursCount { get; set; }
    }
}
