using Domain.CourseEntities.Courses;

namespace Domain.CourseEntities.CourseEducationalPlans
{
    public class CoursesEducationalPlan : Entity
    {
        public Course Course { get; set; }
        public int CourseId => Course.Id;
        public List<CoursesEducationalPlanHours> CoursesEducationalPlanHours { get; set; }
    }
}
