using DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.LessonEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.LessonEntities;

public class LessonRepository : Repository<Lesson>, ILessonRepository
{
    public LessonRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<Lesson> GetAll() =>
        Entities.Include( l => l.Subject )
            .Include( l => l.Teacher )
            .ToList();

    public Lesson GetById( int id ) =>
        Entities.FirstOrDefault( l => l.Id == id ) ?? throw new InvalidOperationException();

    public List<Lesson> GetByStudentGroup( string guid ) => Entities.Where( l => l.StudentGroupGuid == guid ).ToList();

    public List<Lesson> GetBySubjectId( int id ) => Entities.Where( l => l.SubjectId == id ).ToList();

    public List<Lesson> GetByTeacherId( int id ) => Entities.Where( l => l.TeacherId == id ).ToList();

    public List<Lesson> GetByWeekStartingDate( DateOnly startingDate )
    {
        DateOnly finishingDate = startingDate.AddDays( 7 );
        return Entities.Where( l => l.Date >= startingDate && l.Date <= finishingDate ).ToList();
    }

    public List<Lesson> GetByMonth( int year, int month ) => 
        Entities.Where( l => l.Date.Year == year && l.Date.Month == month ).ToList()
}