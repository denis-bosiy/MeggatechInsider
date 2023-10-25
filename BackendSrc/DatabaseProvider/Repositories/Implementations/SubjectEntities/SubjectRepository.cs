using Core.Models.SubjectEntities;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class SubjectRepository : Repository<Subject>, ISubjectRepository
{
    public SubjectRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<Subject> GetAll()
    {
        return Entities.Include( s => s.PaymentType )
            .Include( s => s.Type )
            .Include( s => s.Category )
            .ToList();
    }

    public Subject GetById( int id )
    {
        return Entities.FirstOrDefault( s => s.Id == id ) ?? throw new InvalidOperationException();
    }

    public List<Subject> GetByPaymentTypeId( int id )
    {
        return Entities.Where( s => s.PaymentTypeId == id ).ToList();
    }

    public List<Subject> GetByTypeId( int id )
    {
        return Entities.Where( s => s.TypeId == id ).ToList();
    }

    public List<Subject> GetByCategoryId( int id )
    {
        return Entities.Where( s => s.CategoryId == id ).ToList();
    }
}