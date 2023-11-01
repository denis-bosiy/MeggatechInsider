using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TeacherEntities;

public interface IEducationRepository : IRepository<Education>
{
    public List<Education> GetAll();
    public Education GetById( int id );
}