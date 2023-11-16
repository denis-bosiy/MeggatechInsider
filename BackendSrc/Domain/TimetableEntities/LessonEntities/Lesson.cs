using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public LessonType LessonType { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int StudentGroupId { get; set; }
        //public StudentGroup StudentGroup { get; set; }
        public int StudentGroupType { get; set; }
        public int SubjectId
        {
            get => Subject.Id;
            set => SubjectId = value;
        }

        public Subject Subject { get; set; }
        public int TeacherId
        {
            get => Teacher.Id;
            set => TeacherId = value;
        }
        public Teacher Teacher { get; set; }

        /*
         * -1 - удаленное занятие
         * 0 - кабинет не нужен/не указан
         * любое число > 0 - номер кабинета
         */
        public int Classroom { get; set; }

        public Lesson()
        {
        }

        public Lesson(
            LessonType lessonType,
            DateTime startTime,
            DateTime endTime,
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