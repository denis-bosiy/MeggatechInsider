using Domain.CourseEntities.Courses;

namespace Domain.CourseEntities.CourseEducationalPlans
{
    public class CoursesEducationalPlan : Entity
    {
        public Course Course { get; set; }
        public int CourseId { get; set; }
        public List<CoursesEducationalPlanHours> CoursesEducationalPlanHours { get; set; }
    }
}
