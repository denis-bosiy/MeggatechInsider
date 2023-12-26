using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Domain.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public LessonType LessonType { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public string StudentGroupGuid { get; set; }
        public StudentGroupType StudentGroupType { get; set; }
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
        public int NumberOfGroups { get; set; }
        public int CurrentGroup { get; set; }
        public string ParadeText { get; set; }

        public Lesson(
            LessonType lessonType,
            TimeOnly startTime,
            TimeOnly endTime,
            string studentGroupGuid,
            StudentGroupType studentGroupType,
            int classroom,
            int numberOfGroups,
            int currentGroup,
            string paradeText = "" )
        {
            LessonType = lessonType;
            StartTime = startTime;
            EndTime = endTime;
            Classroom = classroom;
            StudentGroupGuid = studentGroupGuid;
            StudentGroupType = studentGroupType;
            NumberOfGroups = numberOfGroups;
            CurrentGroup = currentGroup;
            ParadeText = paradeText;
        }
    }
}