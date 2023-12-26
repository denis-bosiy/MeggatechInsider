using Domain.TimetableEntities.LessonEntities;

namespace Application.Abstractions.TimetableServices
{
    public interface ITimetableService
    {
        List<Lesson> GetLessonsByDate( int year, int week );
    }
}
