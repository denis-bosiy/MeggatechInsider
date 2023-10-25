using Core.Models.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TeacherEntities;

public interface ITeacherRepository : IRepository<Teacher>
{
    public List<Teacher> GetAll();
    public Teacher GetById( int id );
    public List<Teacher> GetByCategoryId( int id );
    public List<Teacher> GetContractTypeId( int id );
    public List<Teacher> GetByEducationId( int id );
}