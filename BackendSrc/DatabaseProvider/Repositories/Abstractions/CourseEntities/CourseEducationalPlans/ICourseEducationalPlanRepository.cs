using Domain.CourseEntities.CourseEducationalPlans;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseEducationalPlans
{
    public interface ICourseEducationalPlanRepository : IRepository<CoursesEducationalPlan>
    {
        CoursesEducationalPlan GetById( int id );
    }
}
