using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;

namespace Domain.CourseEntities.CourseAssignments
{
    public class CourseAssignment : Entity
    {
        public CourseTeacher CourseTeacher { get; set; }
        public int CourseTeacherId => CourseTeacher.Id;

        public Course Course { get; set; }
        public int CourseId => Course.Id;

        public int GroupCount { get; set; }

        public int Year { get; set; }
    }
}
