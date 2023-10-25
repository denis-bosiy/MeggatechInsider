using Core.Models.SubjectEntities;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class PaymentTypeRepository : Repository<PaymentType>, IPaymentTypeRepository
{
    public PaymentTypeRepository( ApplicationContext context )
        : base( context )
    {
    }

    public List<PaymentType> GetAll()
    {
        return Entities.ToList();
    }

    public PaymentType GetById( int id )
    {
        return Entities.FirstOrDefault( pt => pt.Id == id ) ?? throw new InvalidOperationException();
    }
}