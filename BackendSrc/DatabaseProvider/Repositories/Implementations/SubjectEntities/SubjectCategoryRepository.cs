using Core.Models.SubjectEntities;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectCategoryRepository : Repository<SubjectCategory>, ISubjectCategoryRepository
{
    public SubjectCategoryRepository(ApplicationContext context) : base(context)
    {
    }

    public List<SubjectCategory> GetAll()
    {
        return Entities.ToList();
    }

    public SubjectCategory GetById( int id )
    {
        return Entities.FirstOrDefault( sc => sc.Id == id ) ?? throw new InvalidOperationException();
    }
}