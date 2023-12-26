using DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities;
using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Implementations.EducationalPlanEntities
{
    public class EducationalPlanRepository : Repository<EducationalPlan>, IEducationalPlanRepository
    {
        public EducationalPlanRepository( ApplicationContext context ) 
            : base( context )
        { }

        public EducationalPlan GetById( int id ) => Entities.Where( p => p.Id == id ).FirstOrDefault();
    }
}
