using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseEducationalPlans;
using Domain.CourseEntities.CourseEducationalPlans;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseEducationalPlans
{
    public class CourseEducationalPlanHoursRepository : Repository<CoursesEducationalPlanHours>, ICourseEducationalPlanHoursRepository
    {
        public CourseEducationalPlanHoursRepository( ApplicationContext context ) 
            : base( context )
        { }

        public CoursesEducationalPlanHours GetById( int id )
            => Entities.Where( h => h.Id == id ).FirstOrDefault();
    }
}
