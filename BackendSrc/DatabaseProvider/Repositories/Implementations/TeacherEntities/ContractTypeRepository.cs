using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class ContractTypeRepository : Repository<ContractType>, IContractTypeRepository
{
    public ContractTypeRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<ContractType> GetAll() => Entities.ToList();

    public ContractType GetById( int id ) =>
        Entities.FirstOrDefault( ct => ct.Id == id ) ?? throw new InvalidOperationException();

    public ContractType GetContractTypeByName( string name ) => Entities.Where( s => s.ContractTypeName == name ).FirstOrDefault();
}