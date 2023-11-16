using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities
{
    public interface IPairTimeRepository : IRepository<PairTime>
    {
        public List<PairTime> GetAll();
        public PairTime GetById( int id );
        public List<PairTime> GetByYear( int year );
    }
}
