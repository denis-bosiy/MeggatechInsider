using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Abstractions.StudyingActivityServices
{
    public interface IPairTimeService
    {
        List<PairTime> GetPairTimes( int year );
    }
}
