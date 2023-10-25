using Core.Models.SubjectEntities;

namespace DatabaseProvider.Repositories.Abstractions.SubjectEntities;

public interface IPaymentTypeRepository : IRepository<PaymentType>
{
    public List<PaymentType> GetAll();
    public PaymentType GetById( int id );
}