namespace Core.Models.SubjectEntities;

public class SubjectType : Entity
{
    public string Name { get; set; }
    public List<Subject> Subjects { get; set; } = new();
}