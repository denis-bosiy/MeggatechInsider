using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TeacherEntities;

public interface IContractTypeRepository : IRepository<ContractType>
{
    public List<ContractType> GetAll();
    public ContractType GetById( int id );
}