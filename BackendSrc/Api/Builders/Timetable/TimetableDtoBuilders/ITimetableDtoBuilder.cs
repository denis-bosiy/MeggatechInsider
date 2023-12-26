using Api.Models.Timetable;
using Domain.TimetableEntities.LessonEntities;

namespace Api.Builders.Timetable.TimetableDtoBuilders
{
    public interface ITimetableDtoBuilder
    {
        void SetCells( List<Lesson> lessons );
        void SetSchoolMeeting( Lesson schoolMeeting );
        TimetableResponseDto GetResult();
    }
}
