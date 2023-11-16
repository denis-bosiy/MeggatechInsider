using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Abstractions.StudyingActivityServices
{
    public interface IPairTimeService
    {
        List<PairTime> GetPairTimesByYear( int year );
        void AddPair( int year, TimeOnly startTime, TimeOnly endTime );
        void DeletePairTime( int id );
        bool PairTimeExists( int id );
    }
}
