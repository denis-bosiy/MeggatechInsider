using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities
{
    public class Pair
    {
        public PairTime PairTime { get; init; }
        public StudentGroup StudentGroup { get; init; }
        public Subject Subject { get; init; }
        public Teacher Teacher { get; init; }
        public int Classroom { get; init; }

        public Pair( 
            PairTime pairTime, 
            StudentGroup studentGroup, 
            Subject subject, 
            Teacher teacher, 
            int classroom )
        {
            PairTime = pairTime;
            StudentGroup = studentGroup;
            Subject = subject;
            Teacher = teacher;
            Classroom = classroom;
        }
    }
}
