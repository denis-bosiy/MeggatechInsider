using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class TeacherCategoryRepository : Repository<TeacherCategory>, ITeacherCategoryRepository
{
    public TeacherCategoryRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<TeacherCategory> GetAll() => Entities.ToList();

    public TeacherCategory GetById( int id ) =>
        Entities.FirstOrDefault( tc => tc.Id == id ) ?? throw new InvalidOperationException();
}