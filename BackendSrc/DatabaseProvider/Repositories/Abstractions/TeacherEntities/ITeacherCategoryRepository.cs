using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TeacherEntities;

public interface ITeacherCategoryRepository : IRepository<TeacherCategory>
{
    public List<TeacherCategory> GetAll();
    public TeacherCategory GetById( int id );
}