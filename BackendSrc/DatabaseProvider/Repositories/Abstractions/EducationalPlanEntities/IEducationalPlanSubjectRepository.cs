using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities
{
    public interface IEducationalPlanSubjectRepository : IRepository<EducationalPlanSubject>
    {
        EducationalPlanSubject GetById( int id );
    }
}
