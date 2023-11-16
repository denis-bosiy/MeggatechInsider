using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Abstractions.StudyingActivityServices
{
    public interface ILessonTimeService
    {
        List<LessonTime> GetLessonTimesByYear( int year );
        void AddLesson( int year, TimeOnly startTime, TimeOnly endTime );
        void DeleteLessonTime( int id );
        bool LessonTimeExists( int id );
    }
}
