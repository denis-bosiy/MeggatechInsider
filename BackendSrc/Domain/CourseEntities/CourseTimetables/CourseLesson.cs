using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;
using Domain.TimetableEntities.LessonEntities;

namespace Domain.CourseEntities.CourseTimetables
{
    public class CourseLesson : Entity
    {
        public LessonType LessonType { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int StudentGroupNumber { get; set; }
        public StudentGroupType StudentGroupType { get; set; }
        
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public int CourseTeacherId { get; set; }
        public CourseTeacher CourseTeacher { get; set; }

        /*
         * -1 - удаленное занятие
         * 0 - кабинет не нужен/не указан
         * любое число > 0 - номер кабинета
         */
        public int Classroom { get; set; }

        public CourseLesson(
            LessonType lessonType,
            TimeOnly startTime,
            TimeOnly endTime,
            int studentGroupNumber,
            StudentGroupType studentGroupType,
            Course course,
            CourseTeacher courseTeacher,
            int classroom )
        {
            LessonType = lessonType;
            StartTime = startTime;
            EndTime = endTime;
            StudentGroupNumber = studentGroupNumber;
            StudentGroupType = studentGroupType;
            Course = course;
            CourseTeacher = courseTeacher;
            Classroom = classroom;
        }
    }
}
