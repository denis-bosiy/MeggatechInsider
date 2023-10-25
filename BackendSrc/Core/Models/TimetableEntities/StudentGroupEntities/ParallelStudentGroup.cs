namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class ParallelStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.Parallel;

    public Domain.GenericEntities.Parallel Parallel { get; set; }
}