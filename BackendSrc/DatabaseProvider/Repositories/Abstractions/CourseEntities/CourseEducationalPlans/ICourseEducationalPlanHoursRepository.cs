using Domain.CourseEntities.CourseEducationalPlans;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseEducationalPlans
{
    public interface ICourseEducationalPlanHoursRepository : IRepository<CoursesEducationalPlanHours>
    {
        CoursesEducationalPlanHours GetById( int id );
    }
}
