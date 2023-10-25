using Core.Models.SubjectEntities;

namespace DatabaseProvider.Repositories.Abstractions.SubjectEntities;

public interface ISubjectTypeRepository : IRepository<SubjectType>
{
    public List<SubjectType> GetAll();
    public SubjectType GetById( int id );
}