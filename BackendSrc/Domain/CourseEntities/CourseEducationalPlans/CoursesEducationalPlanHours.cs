namespace Domain.CourseEntities.CourseEducationalPlans
{
    public class CoursesEducationalPlanHours : Entity
    {
        public CoursesEducationalPlan CoursesEducationalPlan { get; set; }
        public int CoursesEducationalPlanId
        {
            get => CoursesEducationalPlan.Id;

            init { }
        }
        public DateOnly WeekStartDate { get; set; }
        public int HoursCount { get; set; }
    }
}
