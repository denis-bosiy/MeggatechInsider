using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.GuidebookEntities
{
    public class ParadeTimeRepository : Repository<ParadeTime>, IParadeTimeRepository
    {
        public ParadeTimeRepository( ApplicationContext context ) : base( context )
        {
        }

        public List<ParadeTime> GetAll() => Entities.ToList();

        public ParadeTime GetById( int id ) => Entities.Where( e => e.Id == id ).FirstOrDefault();
    }
}
