using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public LessonType LessonType { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int StudentGroupId => StudentGroup.Id;
        public StudentGroup StudentGroup { get; set; }
        public int SubjectId => Subject.Id;

        public Subject Subject { get; set; }
        public int TeacherId => Teacher.Id;
        public Teacher Teacher { get; set; }

        /*
         * -1 - удаленное занятие
         * 0 - кабинет не нужен/не указан
         * любое число > 0 - номер кабинета
         */
        public int Classroom { get; set; }

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