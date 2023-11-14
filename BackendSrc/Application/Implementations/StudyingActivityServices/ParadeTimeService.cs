using Application.Abstractions.StudyingActivityServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Implementations.StudyingActivityServices
{
    public class ParadeTimeService : IParadeTimeService
    {
        private readonly IParadeTimeRepository _paradeTimeRepository;

        public ParadeTimeService( IParadeTimeRepository paradeTimeRepository )
        {
            _paradeTimeRepository = paradeTimeRepository;
        }

        public ParadeTime GetParadeTimeByYear( int year )
        {
            return _paradeTimeRepository.GetByYear( year );
        }

        public void CreateParadeTime( int year, DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime )
        {
            ParadeTime paradeTime = new ParadeTime( year, dayOfWeek, startTime, endTime );
            _paradeTimeRepository.Add( paradeTime );
            _paradeTimeRepository.SaveChanges();
        }

        public void UpdateParadeTime( int id, int year, DayOfWeek dayOfWeek, TimeOnly startTime, TimeOnly endTime )
        {
            ParadeTime paradeTime = _paradeTimeRepository.GetById( id );
            paradeTime.Year = year;
            paradeTime.DayOfWeek = dayOfWeek;
            paradeTime.StartTime = startTime;
            paradeTime.EndTime = endTime;
            _paradeTimeRepository.Update( paradeTime );
            _paradeTimeRepository.SaveChanges();
        }
    }
}
