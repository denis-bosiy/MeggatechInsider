using DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities;
using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Implementations.EducationalPlanEntities
{
    public class EducationalPlanSubjectRepository : Repository<EducationalPlanSubject>, IEducationalPlanSubjectRepository
    {
        public EducationalPlanSubjectRepository( ApplicationContext context )
            : base( context )
        { }

        public EducationalPlanSubject GetById( int id ) => Entities.Where( s => s.Id == id ).FirstOrDefault();
    }
}
