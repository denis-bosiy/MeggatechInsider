using Domain.TimetableEntities.GuidebookEntities;

namespace Domain.CourseEntities.CourceTeachers
{
    public class CourseTeacherAvailableHours
    {
        public CourseTeacher CourseTeacher { get; set; }
        public int CourseTeacherId { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public List<LessonTime> AvailableLessonTimes { get; set; }
        public List<PairTime> AvailablePairTimes { get; set; }
    }
}
