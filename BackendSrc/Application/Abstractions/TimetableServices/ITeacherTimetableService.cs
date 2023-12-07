using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.TeacherEntities;

namespace Application.Abstractions.TimetableServices;

public interface ITeacherTimetableService
{
    List<TeacherAvailableHours> GetAvailableHoursByWeekStartDate( DateOnly startDate );

    void CreateTeacherAvailableHours( int teacherId, DayOfWeek dayOfWeek, List<PairTime> pairTimes,
        List<LessonTime> lessonTimes, DateOnly weekStartDate );

    void UpdateTeacherAvailableHours( int id, int teacherId, DayOfWeek dayOfWeek, List<PairTime> pairTimes,
        List<LessonTime> lessonTimes, DateOnly weekStartDate );

    // TODO: заменить методом в отдельном сервисе
    public bool IsValidYear( int year );

    // TODO: заменить методом в отдельном сервисе
    public bool IsValidWeek( int week );
    
    // TODO: заменить методом в отдельном сервисе
    public DateOnly GetWeekStartDate( int year, int week );
}