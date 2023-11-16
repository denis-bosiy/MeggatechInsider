using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Abstractions.StudyingActivityServices
{
    public interface IParadeTimeService
    {
        ParadeTime GetParadeTimeByYear( int year );
        void CreateParadeTime( int year, DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime );
        void UpdateParadeTime( int id, int year, DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime );
    }
}
