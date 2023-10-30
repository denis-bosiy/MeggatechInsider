namespace Domain.TeacherEntities
{
    public class ContractType : Entity
    {
        public string ContractTypeName { get; init; }

        public ContractType( string contractTypeName )
        {
            ContractTypeName = contractTypeName;
        }
    }
}