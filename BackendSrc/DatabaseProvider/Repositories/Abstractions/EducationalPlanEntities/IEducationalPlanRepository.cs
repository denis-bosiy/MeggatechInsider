using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities
{
    public interface IEducationalPlanRepository : IRepository<EducationalPlan>
    {
        EducationalPlan GetById( int id );
    }
}
