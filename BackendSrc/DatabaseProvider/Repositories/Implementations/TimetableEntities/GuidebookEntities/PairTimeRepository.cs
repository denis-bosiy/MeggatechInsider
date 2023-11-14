using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.GuidebookEntities
{
    public class PairTimeRepository : Repository<PairTime>, IPairTimeRepository
    {
        public PairTimeRepository( ApplicationContext context ) 
            : base( context )
        {
        }

        public List<PairTime> GetAll() => Entities.ToList();

        public PairTime GetById( int id ) => Entities.Where( e => e.Id == id ).FirstOrDefault();

        public List<PairTime> GetByYear( int year ) => Entities.Where( e => e.Year == year ).ToList();
    }
}
