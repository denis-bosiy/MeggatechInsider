namespace Core.Models.TeacherEntities;

public class TeacherCategory : Entity
{
    public string Name { get; set; }
    
    public List<Teacher> Teachers { get; set; }
}