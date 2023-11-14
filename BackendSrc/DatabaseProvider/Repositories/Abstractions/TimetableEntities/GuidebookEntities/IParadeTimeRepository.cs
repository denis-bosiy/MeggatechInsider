using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities
{
    public interface IParadeTimeRepository : IRepository<ParadeTime>
    {
        public List<ParadeTime> GetAll();
        public ParadeTime GetById( int id );
        ParadeTime GetByYear( int year );
        void Update( ParadeTime paradeTime );
    }
}
