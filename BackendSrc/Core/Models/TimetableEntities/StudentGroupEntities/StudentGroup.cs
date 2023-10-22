namespace Core.Models.TimetableEntities.StudentGroupEntities;

public abstract class StudentGroup : Entity
{
    public abstract StudentGroupType Type { get; }
}