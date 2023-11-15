using Application.Abstractions.StudyingActivityServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Implementations.StudyingActivityServices
{
    public class LessonTimeService : ILessonTimeService
    {
        private readonly ILessonTimeRepository _lessonTimeRepository;

        public LessonTimeService( ILessonTimeRepository lessonTimeRepository )
        {
            _lessonTimeRepository = lessonTimeRepository;
        }

        public List<LessonTime> GetLessonTimesByYear( int year )
        {
            return _lessonTimeRepository.GetByYear( year );
        }

        public void AddLesson( int year, TimeOnly startTime, TimeOnly endTime )
        {
            LessonTime lessonTime = new LessonTime( year, startTime, endTime );
            _lessonTimeRepository.Add( lessonTime );
            _lessonTimeRepository.SaveChanges();
        }

        public void DeleteLessonTime( int id )
        {
            LessonTime existingLessonTime = _lessonTimeRepository.GetById( id );
            if ( existingLessonTime is null )
            {
                return;
            }
            _lessonTimeRepository.Remove( existingLessonTime );
            _lessonTimeRepository.SaveChanges();
        }

        public bool LessonTimeExists( int id )
        {
            return !( _lessonTimeRepository.GetById( id ) is null );
        }
    }
}
