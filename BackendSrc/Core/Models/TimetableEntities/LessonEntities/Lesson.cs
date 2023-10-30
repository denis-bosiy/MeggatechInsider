using Core.Models.SubjectEntities;
using Core.Models.TeacherEntities;
using Core.Models.TimetableEntities.StudentGroupEntities;
using Domain;
using Domain.TimetableEntities.LessonEntities;

namespace Core.Models.TimetableEntities.LessonEntities;

public class Lesson : Entity
{
    public LessonType LessonType { get; set; }
    public TimeOnly StartTime { get; set; }
    public TimeOnly EndTime { get; set; }
    public int StudentGroupId { get; set; }
    public StudentGroup StudentGroup { get; set; }
    public int SubjectId { get; set; }
    public Subject Subject { get; set; }
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int Classroom { get; set; }
}