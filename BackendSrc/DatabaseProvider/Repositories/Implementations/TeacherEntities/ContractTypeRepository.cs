using Core.Models.TeacherEntities;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class ContractTypeRepository : Repository<ContractType>, IContractTypeRepository
{
    public ContractTypeRepository(ApplicationContext context) : base(context)
    {
    }

    public List<ContractType> GetAll()
    {
        return Entities.ToList();
    }

    public ContractType GetById( int id )
    {
        return Entities.FirstOrDefault( ct => ct.Id == id ) ?? throw new InvalidOperationException();
    }
}