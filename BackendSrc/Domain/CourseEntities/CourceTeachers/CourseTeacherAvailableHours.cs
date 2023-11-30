using Domain.TimetableEntities.GuidebookEntities;

namespace Domain.CourseEntities.CourceTeachers
{
    public class CourseTeacherAvailableHours : Entity
    {
        public CourseTeacher CourseTeacher { get; set; }
        public int CourseTeacherId => CourseTeacher.Id;
        public DayOfWeek DayOfWeek { get; set; }
        public List<LessonTime> AvailableLessonTimes { get; set; }
        public List<PairTime> AvailablePairTimes { get; set; }
    }
}
