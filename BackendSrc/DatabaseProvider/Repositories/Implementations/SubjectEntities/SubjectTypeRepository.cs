using Core.Models.SubjectEntities;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectTypeRepository : Repository<SubjectType>, ISubjectTypeRepository
{
    public SubjectTypeRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<SubjectType> GetAll()
    {
        return Entities.ToList();
    }

    public SubjectType GetById( int id )
    {
        return Entities.FirstOrDefault( st => st.Id == id ) ?? throw new InvalidOperationException();
    }
}