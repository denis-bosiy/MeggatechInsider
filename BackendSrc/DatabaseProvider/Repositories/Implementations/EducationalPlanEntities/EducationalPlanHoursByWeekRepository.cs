using DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities;
using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Implementations.EducationalPlanEntities
{
    public class EducationalPlanHoursByWeekRepository : Repository<EducationalPlanHoursByWeek>, IEducationalPlanHoursByWeekRepository
    {
        public EducationalPlanHoursByWeekRepository( ApplicationContext context ) 
            : base( context )
        { }

        public EducationalPlanHoursByWeek GetById( int id ) => Entities.Where( h => h.Id == id ).FirstOrDefault();
    }
}
