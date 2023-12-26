using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.AssignmentEntities
{
    public class Assignment : Entity
    {
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        public int GroupCount { get; set; }

        public int Year { get; set; }
        public int ClassNumber { get; set; }
    }
}