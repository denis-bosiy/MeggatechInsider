namespace Domain.TimetableEntities.StudentGroupEntities
{
    public class ClassStudentGroup : StudentGroup
    {
        public override StudentGroupType Type => StudentGroupType.Class;

        public GenericEntities.Parallel Parallel { get; init; }
        public int ClassNumber { get; init; }

        public ClassStudentGroup( GenericEntities.Parallel parallel, int classNumber )
        {
            Parallel = parallel;
            ClassNumber = classNumber;
        }
    }
}