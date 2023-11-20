using Domain.TimetableEntities.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;

public interface ITeacherTimetableRepository : IRepository<TeacherTimetable>
{
    public List<TeacherTimetable> GetAll();
    public TeacherTimetable GetById( int id );
    public List<TeacherTimetable> GetByYear( int year );
    public List<TeacherTimetable> GetByWeek( int week );
    public List<TeacherTimetable> GetByYearAndWeek( int year, int week );
}