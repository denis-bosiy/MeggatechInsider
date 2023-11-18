using Domain.TimetableEntities.LessonEntities;

namespace Domain.TimetableEntities.StudentGroupEntities
{
    public abstract class StudentGroup : Entity
    {
        public abstract StudentGroupType Type { get; }

        public List<Lesson> Lessons { get; } = new List<Lesson>();
    }
}