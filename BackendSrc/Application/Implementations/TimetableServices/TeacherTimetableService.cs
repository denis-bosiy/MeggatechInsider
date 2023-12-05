using Application.Abstractions.TimetableServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.TeacherEntities;

namespace Application.Implementations.TimetableServices;

public class TeacherTimetableService : ITeacherTimetableService
{
    private readonly ITeacherAvailableHoursRepository _teacherAvailableHoursRepository;

    public TeacherTimetableService( ITeacherAvailableHoursRepository teacherAvailableHoursRepository )
    {
        _teacherAvailableHoursRepository = teacherAvailableHoursRepository;
    }

    public List<TeacherAvailableHours> GetAvailableHoursByWeekStartDate( DateOnly startDate )
    {
        return _teacherAvailableHoursRepository.GetByStartDate( startDate );
    }

    public void CreateTeacherAvailableHours( int teacherId, DayOfWeek dayOfWeek, List<PairTime> pairTimes,
        List<LessonTime> lessonTimes, DateOnly weekStartDate )
    {
        TeacherAvailableHours teacherAvailableHours = new TeacherAvailableHours()
        {
            TeacherId = teacherId,
            DayOfWeek = dayOfWeek,
            AvailablePairTimes = pairTimes,
            AvailableLessonTimes = lessonTimes,
            WeekStartDate = weekStartDate
        };
        _teacherAvailableHoursRepository.Add( teacherAvailableHours );
        _teacherAvailableHoursRepository.SaveChanges();
    }

    public void UpdateTeacherAvailableHours( int id, int teacherId, DayOfWeek dayOfWeek, List<PairTime> pairTimes,
        List<LessonTime> lessonTimes, DateOnly weekStartDate )
    {
        TeacherAvailableHours teacherAvailableHours = _teacherAvailableHoursRepository.GetById( id );
        teacherAvailableHours.TeacherId = teacherId;
        teacherAvailableHours.DayOfWeek = dayOfWeek;
        teacherAvailableHours.AvailablePairTimes = pairTimes;
        teacherAvailableHours.AvailableLessonTimes = lessonTimes;
        teacherAvailableHours.WeekStartDate = weekStartDate;
        _teacherAvailableHoursRepository.Update( teacherAvailableHours );
        _teacherAvailableHoursRepository.SaveChanges();
    }

    public bool IsValidYear( int year )
    {
        // TODO: получать диапазон валидных лет
        return true;
    }

    public bool IsValidWeek( int week )
    {
        // TODO: понимать, валиден ли номер недели
        return true;
    }

    // TODO: заменить методом в отдельном сервисе
    public DateOnly GetWeekStartDate( int year, int week )
    {
        // TODO: для weekStartDate добавить ее получение из отдельного сервиса
        DateOnly studyingStartDate = new DateOnly( year, 9, 1 );

        return studyingStartDate.AddDays( week * 7 );
    }
}