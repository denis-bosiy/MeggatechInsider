namespace Domain.TeacherEntities
{
    public class ContractType
    {
        public string ContractTypeName { get; init; }

        public ContractType( string contractTypeName )
        {
            ContractTypeName = contractTypeName;
        }
    }
}