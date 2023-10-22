namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class HorizontalSubgroupStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.HorizontalSubgroup;

    public GenericEntities.Parallel Parallel { get; set; }
    public int SubgroupNumber { get; set; }
}