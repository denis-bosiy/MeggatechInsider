using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities
{
    public class Lesson
    {
        public LessonTime LessonTime { get; init; }
        public StudentGroup StudentGroup { get; init; }
        // public препод
        // public предмет
        public int Classroom { get; init; }

        public Lesson( LessonTime lessonTime, StudentGroup studentGroup, int classroom )
        {
            LessonTime = lessonTime;
            StudentGroup = studentGroup;
            Classroom = classroom;
        }
    }
}
