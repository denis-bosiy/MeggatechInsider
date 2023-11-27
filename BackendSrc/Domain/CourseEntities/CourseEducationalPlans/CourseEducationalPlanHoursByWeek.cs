namespace Domain.CourseEntities.CourseEducationalPlans
{
    public class CourseEducationalPlanHoursByWeek : Entity
    {
        public CoursesEducationalPlan CoursesEducationalPlan { get; set; }
        public int CoursesEducationalPlanId { get; set; }
        public DateOnly WeekStartDate { get; set; }
        public int HoursCount { get; set; }
    }
}
