using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;

namespace Domain.CourseEntities.CourseAssignments
{
    public class Assignment : Entity
    {
        public CourseTeacher CourseTeacher { get; set; }
        public int CourseTeacherId { get; set; }

        public Course Course { get; set; }
        public int CourseId { get; set; }

        public int GroupCount { get; set; }

        public int Year { get; set; }
    }
}
