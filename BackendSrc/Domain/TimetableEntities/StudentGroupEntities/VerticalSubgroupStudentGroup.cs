namespace Domain.TimetableEntities.StudentGroupEntities
{
    public class VerticalSubgroupStudentGroup : StudentGroup
    {
        public override StudentGroupType Type => StudentGroupType.VerticalSubgroup;

        public GenericEntities.Parallel Parallel { get; init; }
        public int ClassNumber { get; init; }
        public int SubgroupNumber { get; init; }

        public VerticalSubgroupStudentGroup( GenericEntities.Parallel parallel, int classNumber, int subgroupNumber )
        {
            Parallel = parallel;
            ClassNumber = classNumber;
            SubgroupNumber = subgroupNumber;
        }
    }
}
