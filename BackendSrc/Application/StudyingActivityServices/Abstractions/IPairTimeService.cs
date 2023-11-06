using Domain.TimetableEntities.GuidebookEntities;

namespace Application.StudyingActivityServices.Abstractions
{
    public interface IPairTimeService
    {
        List<PairTime> GetPairTimes( int year );
    }
}
