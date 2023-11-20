using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.TeacherEntitites;

public class TeacherTimetableRepository : Repository<TeacherTimetable>, ITeacherTimetableRepository
{
    public TeacherTimetableRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<TeacherTimetable> GetAll() =>
        Entities.Include( t => t.Teacher )
            .Include( t => t.Subject )
            .ToList();

    public TeacherTimetable GetById( int id ) =>
        Entities.FirstOrDefault( t => t.Id == id ) ?? throw new InvalidOperationException();

    public List<TeacherTimetable> GetByYear( int year ) => Entities.Where( t => t.Year == year ).ToList();

    public List<TeacherTimetable> GetByWeek( int week ) => Entities.Where( t => t.Week == week ).ToList();

    public List<TeacherTimetable> GetByYearAndWeek( int year, int week ) =>
        Entities.Where( t => t.Year == year ).Where( t => t.Week == week ).ToList();
}