using Core.Models.TimetableEntities.LessonEntities;
using Domain;

namespace Core.Models.TimetableEntities.StudentGroupEntities;

public abstract class StudentGroup : Entity
{
    public abstract StudentGroupType Type { get; }

    public List<Lesson> Lessons { get; set; }
}