using DatabaseProvider.Repositories.Implementations.SubjectEntities;
using Domain.SubjectEntities;

namespace DatabaseProvider.Repositories.Abstractions.SubjectEntities;

public interface ISubjectRepository : IRepository<Subject>
{
    public List<Subject> GetBatchByYear( int year );
    public Subject GetById( int id );
    public List<Subject> GetByPaymentTypeId( int id );
    public List<Subject> GetByTypeId( int id );
    public List<Subject> GetByCategoryId( int id );
}