using Domain.TimetableEntities.LessonEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;

public interface ILessonRepository : IRepository<Lesson>
{
    public List<Lesson> GetAll();
    public Lesson GetById( int id );
    public List<Lesson> GetByStudentGroup( int id );
    public List<Lesson> GetBySubjectId( int id );
    public List<Lesson> GetByTeacherId( int id );
    List<Lesson> GetByWeekStartingDate( DateOnly startingDate );
}