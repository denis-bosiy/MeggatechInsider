using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseEducationalPlans;
using Domain.CourseEntities.CourseEducationalPlans;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseEducationalPlans
{
    public class CourseEducationalPlanRepository : Repository<CoursesEducationalPlan>, ICourseEducationalPlanRepository
    {
        public CourseEducationalPlanRepository( ApplicationContext context ) 
            : base( context )
        { }

        public CoursesEducationalPlan GetById( int id )
            => Entities.Where( p => p.Id == id ).FirstOrDefault();
    }
}
