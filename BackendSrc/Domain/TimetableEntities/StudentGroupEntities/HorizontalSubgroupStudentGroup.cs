namespace Domain.TimetableEntities.StudentGroupEntities
{
    public class HorizontalSubgroupStudentGroup : StudentGroup
    {
        public override StudentGroupType Type => StudentGroupType.HorizontalSubgroup;

        public GenericEntities.Parallel Parallel { get; init; }
        public int SubgroupNumber { get; init; }

        public HorizontalSubgroupStudentGroup( GenericEntities.Parallel parallel, int subgroupNumber )
        {
            Parallel = parallel;
            SubgroupNumber = subgroupNumber;
        }
    }
}