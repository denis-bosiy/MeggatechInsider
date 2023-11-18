using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public LessonType LessonType { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int StudentGroupId { get; set; }
        public int StudentGroupType { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }
        public int TeacherId { get; set; }
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
            int studentGroupId,
            int studentGroupType,
            int classroom )
        {
            LessonType = lessonType;
            StartTime = startTime;
            EndTime = endTime;
            Classroom = classroom;
            StudentGroupId = studentGroupId;
            StudentGroupType = studentGroupType;
        }
    }
}