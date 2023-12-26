using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectCategoryRepository : Repository<SubjectCategory>, ISubjectCategoryRepository
{
    public SubjectCategoryRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<SubjectCategory> GetAll() => Entities.ToList();

    public SubjectCategory GetById( int id ) =>
        Entities.FirstOrDefault( sc => sc.Id == id ) ?? throw new InvalidOperationException();

    public SubjectCategory GetSubjectCategoryByCategory( string category ) => Entities.FirstOrDefault( s => s.SubjectCategoryName == category ) ?? throw new InvalidOperationException();
}