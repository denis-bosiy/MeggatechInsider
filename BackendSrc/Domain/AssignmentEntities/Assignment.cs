using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.AssignmentEntities
{
    public class Assignment : Entity
    {
        public Teacher Teacher { get; set; }
        public int TeacherId => Teacher.Id;

        public Subject Subject { get; set; }
        public int SubjectId => Subject.Id;

        public int GroupCount { get; set; }

        public int Year { get; set; }
    }
}
