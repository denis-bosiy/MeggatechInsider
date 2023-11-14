using Application.Abstractions.StudyingActivityServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Implementations.StudyingActivityServices
{
    public class PairTimeService : IPairTimeService
    {
        private readonly IPairTimeRepository _pairTimeRepository;

        public PairTimeService( IPairTimeRepository pairTimeRepository )
        {
            _pairTimeRepository = pairTimeRepository;
        }

        public List<PairTime> GetPairTimesByYear( int year )
        {
            return _pairTimeRepository.GetByYear( year );
        }

        public void AddPair( int year, TimeOnly startTime, TimeOnly endTime )
        {
            PairTime newPairTime = new PairTime( year, startTime, endTime );
            _pairTimeRepository.Add( newPairTime );
            _pairTimeRepository.SaveChanges();
        }

        public void DeletePairTime( int id )
        {
            PairTime existingPairTime = _pairTimeRepository.GetById( id );
            if ( existingPairTime == null )
            {
                return;
            }
            _pairTimeRepository.Remove( existingPairTime );
            _pairTimeRepository.SaveChanges();
        }

        public bool PairTimeExists( int id )
        {
            return _pairTimeRepository.GetById( id ) != null;
        }
    }
}
