using Domain.TimetableEntities.LessonEntities;

namespace Domain.TimetableEntities.StudentGroupEntities
{
    public abstract class StudentGroup : Entity
    {
        public abstract StudentGroupType Type { get; }

        public string Guid { get; set; }
        public int Year { get; set; }

        public List<Lesson> Lessons { get; } = new List<Lesson>();
    }
}