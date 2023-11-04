using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectRepository : Repository<Subject>, ISubjectRepository
{
    public SubjectRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<Subject> GetAll() =>
        Entities.Include( s => s.PaymentType )
            .Include( s => s.SubjectType )
            .Include( s => s.SubjectCategory )
            .ToList();

    public Subject GetById( int id ) =>
        Entities.FirstOrDefault( s => s.Id == id ) ?? throw new InvalidOperationException();

    public List<Subject> GetByPaymentTypeId( int id ) => Entities.Where( s => s.PaymentTypeId == id ).ToList();

    public List<Subject> GetByTypeId( int id ) => Entities.Where( s => s.SubjectTypeId == id ).ToList();

    public List<Subject> GetByCategoryId( int id ) => Entities.Where( s => s.SubjectCategoryId == id ).ToList();
}