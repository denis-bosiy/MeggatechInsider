namespace Core.Models.TeacherEntities;

public class ContractType : Entity
{
    public string Name { get; set; }

    public List<Teacher> Teachers { get; set; }
}