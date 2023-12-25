using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TeacherEntities;

public interface ITeacherRepository : IRepository<Teacher>
{
    public List<Teacher> GetBatchByYear( int year );
    public Teacher GetById( int id );
    public List<Teacher> GetByCategoryId( int id );
    public List<Teacher> GetByContractTypeId( int id );
    public List<Teacher> GetByEducationId( int id );
    public void Update( Teacher teacher );
}