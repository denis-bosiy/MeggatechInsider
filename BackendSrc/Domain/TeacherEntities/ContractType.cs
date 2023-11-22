namespace Domain.TeacherEntities
{
    public class ContractType : Entity
    {
        public string ContractTypeName { get; set; }

        public List<Teacher> Teachers { get; } = new List<Teacher>();

        public ContractType( string contractTypeName )
        {
            ContractTypeName = contractTypeName;
        }
    }
}