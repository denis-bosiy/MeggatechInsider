namespace Core.Models.TimetableEntities.StudentGroupEntities;

public class VerticalSubgroupStudentGroup : StudentGroup
{
    public override StudentGroupType Type => StudentGroupType.VerticalSubgroup;

    public GenericEntities.Parallel Parallel { get; set; }
    public int ClassNumber { get; set; }
    public int SubgroupNumber { get; set; }
}