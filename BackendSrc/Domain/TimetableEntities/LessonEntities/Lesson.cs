using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson
    {
        public LessonType LessonType { get; init; }
        public TimeOnly StartTime { get; init; }
        public TimeOnly EndTime {  get; init; }
        public StudentGroup StudentGroup { get; init; }
        public int SubjectId { get; init; }
        public int TeacherId { get; init; }

        /*
         * -1 - удаленное занятие
         * 0 - кабинет не нужен/не указан
         * любое число > 0 - номер кабинета
         */
        public int Classroom { get; init; }

        public Lesson(
            LessonType lessonType,
            TimeOnly startTime,
            TimeOnly endTime,
            StudentGroup studentGroup,
            int subjectId,
            int teacherId,
            int classroom )
        {
            LessonType = lessonType;
            StartTime = startTime;
            EndTime = endTime;
            StudentGroup = studentGroup;
            SubjectId = subjectId;
            TeacherId = teacherId;
            Classroom = classroom;
        }
    }
}
