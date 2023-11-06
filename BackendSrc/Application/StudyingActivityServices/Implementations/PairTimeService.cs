using Application.StudyingActivityServices.Abstractions;
using Domain.TimetableEntities.GuidebookEntities;

namespace Application.StudyingActivityServices.Implementations
{
    public class PairTimeService : IPairTimeService
    {
        public List<PairTime> GetPairTimes( int year )
        {
            // GuidebookEntities не заведены в бд. Дописать, потом реализовать логику метода
            // Пока пишу каркас, можно оставить так
            PairTime mock = new PairTime(
                startTime: new TimeOnly( hour: 8, minute: 0 ),
                endTime: new TimeOnly( hour: 9, minute: 45 )
            );
            return new List<PairTime> { mock };
        }
    }
}
