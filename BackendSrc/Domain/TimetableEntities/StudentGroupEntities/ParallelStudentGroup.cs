namespace Domain.TimetableEntities.StudentGroupEntities
{
    public class ParallelStudentGroup : StudentGroup
    {
        public override StudentGroupType Type => StudentGroupType.Parallel;

        public GenericEntities.Parallel Parallel { get; init; }

        public ParallelStudentGroup( GenericEntities.Parallel parallel ) 
        {
            Parallel = parallel;
        }
    }
}
