using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectTypeRepository : Repository<SubjectType>, ISubjectTypeRepository
{
    public SubjectTypeRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<SubjectType> GetAll() => Entities.ToList();

    public SubjectType GetById( int id ) =>
        Entities.FirstOrDefault( st => st.Id == id ) ?? throw new InvalidOperationException();

    public SubjectType GetSubjectTypeByType( string type ) => Entities.FirstOrDefault( s => s.SubjectTypeName == type ) ?? throw new InvalidOperationException();
}