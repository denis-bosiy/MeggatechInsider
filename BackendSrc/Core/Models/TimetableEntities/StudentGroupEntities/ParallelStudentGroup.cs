namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class ParallelStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.Parallel;

    public GenericEntities.Parallel Parallel { get; set; }
}