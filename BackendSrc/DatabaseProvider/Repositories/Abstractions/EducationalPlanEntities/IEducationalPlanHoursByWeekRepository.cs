using Domain.EducationalPlan;

namespace DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities
{
    public interface IEducationalPlanHoursByWeekRepository : IRepository<EducationalPlanHoursByWeek>
    {
        EducationalPlanHoursByWeek GetById( int id );
    }
}
