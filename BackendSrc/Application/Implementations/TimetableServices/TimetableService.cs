using Application.Abstractions.TimetableServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.LessonEntities;

namespace Application.Implementations.TimetableServices
{
    public class TimetableService : ITimetableService
    {
        private readonly ILessonRepository _lessonRepository;

        public TimetableService( ILessonRepository lessonRepository ) 
        {
            _lessonRepository = lessonRepository;
        }

        public List<Lesson> GetLessonsByDate( int year, int week )
        {
            DateOnly weekStartDate = new DateOnly( year: year, month: 9, day: 1 ).AddDays( ( week - 1 ) * 7 );
            List<Lesson> lessons = _lessonRepository.GetByWeekStartingDate( weekStartDate );
            return lessons;
        }
    }
}
