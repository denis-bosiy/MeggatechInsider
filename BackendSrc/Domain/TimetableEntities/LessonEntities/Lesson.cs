using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public LessonType LessonType { get; init; }
        public TimeOnly StartTime { get; init; }
        public TimeOnly EndTime { get; init; }
        public int StudentGroupId => StudentGroup.Id;
        public StudentGroup StudentGroup { get; init; }
        public int SubjectId => Subject.Id;

        public Subject Subject { get; init; }
        public int TeacherId => Teacher.Id;
        public Teacher Teacher { get; init; }

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
            Subject subject,
            Teacher teacher,
            int classroom )
        {
            LessonType = lessonType;
            StartTime = startTime;
            EndTime = endTime;
            StudentGroup = studentGroup;
            Subject = subject;
            Teacher = teacher;
            Classroom = classroom;
        }
    }
}