namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class HorizontalSubgroupStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.HorizontalSubgroup;

    public Domain.GenericEntities.Parallel Parallel { get; set; }
    public int SubgroupNumber { get; set; }
}