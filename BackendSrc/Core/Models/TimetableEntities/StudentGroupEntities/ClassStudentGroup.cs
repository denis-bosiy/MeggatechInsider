namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class ClassStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.Class;

    public Domain.GenericEntities.Parallel Parallel { get; set; }
    public int ClassNumber { get; set; }
}