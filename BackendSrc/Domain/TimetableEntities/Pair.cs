using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities
{
    public class Pair
    {
        public PairTime PairTime { get; init; }
        public StudentGroup StudentGroup { get; init; }
        // public препод
        // public предмет
        public int Classroom { get; init; }

        public Pair( PairTime pairTime, StudentGroup studentGroup, int classroom )
        {
            PairTime = pairTime;
            StudentGroup = studentGroup;
            Classroom = classroom;
        }
    }
}
