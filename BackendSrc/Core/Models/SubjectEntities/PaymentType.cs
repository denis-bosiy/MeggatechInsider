namespace Core.Models.SubjectEntities;

public class PaymentType : Entity
{
    public string Name { get; set; }
    public List<Subject> Subjects { get; set; } = new();
}