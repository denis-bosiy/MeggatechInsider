using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities;

public class PaymentTypeRepository : Repository<PaymentType>, IPaymentTypeRepository
{
    public PaymentTypeRepository( ApplicationContext context )
        : base( context )
    {
    }

    public List<PaymentType> GetAll() => Entities.ToList();

    public PaymentType GetById( int id ) =>
        Entities.FirstOrDefault( pt => pt.Id == id ) ?? throw new InvalidOperationException();
}