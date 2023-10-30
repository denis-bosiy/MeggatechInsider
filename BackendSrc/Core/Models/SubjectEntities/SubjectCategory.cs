using Domain;

namespace Core.Models.SubjectEntities;

public class SubjectCategory : Entity
{
    public string Name { get; set; }
    public List<Subject> Subjects { get; set; } = new();
}