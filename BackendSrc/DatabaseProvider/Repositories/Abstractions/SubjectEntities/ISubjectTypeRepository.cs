using Domain.SubjectEntities;

namespace DatabaseProvider.Repositories.Abstractions.SubjectEntities;

public interface ISubjectTypeRepository : IRepository<SubjectType>
{
    public List<SubjectType> GetAll();
    public SubjectType GetById( int id );
    public SubjectType GetSubjectTypeByType( string type );
}