using Core.Models.TimetableEntities.LessonEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.LessonEntities;

public class LessonRepository : Repository<Lesson>, ILessonRepository
{
    public LessonRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<Lesson> GetAll()
    {
        return Entities.Include( l => l.StudentGroup )
            .Include( l => l.Subject )
            .Include( l => l.Teacher )
            .ToList();
    }

    public Lesson GetById( int id )
    {
        return Entities.FirstOrDefault( l => l.Id == id ) ?? throw new InvalidOperationException();
    }

    public List<Lesson> GetByStudentGroup( int id )
    {
        return Entities.Where( l => l.StudentGroupId == id ).ToList();
    }

    public List<Lesson> GetBySubjectId( int id )
    {
        return Entities.Where( l => l.SubjectId == id ).ToList();
    }

    public List<Lesson> GetByTeacherId( int id )
    {
        return Entities.Where( l => l.TeacherId == id ).ToList();
    }
}