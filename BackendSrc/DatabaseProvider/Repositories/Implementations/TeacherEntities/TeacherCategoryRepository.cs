using Core.Models.TeacherEntities;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class TeacherCategoryRepository : Repository<TeacherCategory>, ITeacherCategoryRepository
{
    public TeacherCategoryRepository(ApplicationContext context) : base(context)
    {
    }

    public List<TeacherCategory> GetAll()
    {
        return Entities.ToList();
    }

    public TeacherCategory GetById( int id )
    {
        return Entities.FirstOrDefault( tc => tc.Id == id ) ?? throw new InvalidOperationException();
    }
}