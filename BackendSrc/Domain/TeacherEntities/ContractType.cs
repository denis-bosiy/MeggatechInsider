namespace Domain.TeacherEntities
{
    public class ContractType : Entity
    {
        public string ContractTypeName { get; set; }

        public List<Teacher> Teachers { get; set; }

        public ContractType( string contractTypeName )
        {
            ContractTypeName = contractTypeName;
        }
    }
}