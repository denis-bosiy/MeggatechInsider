namespace Domain.CourseEntities.Courses
{
    public class Course : Entity
    {
        public string CourseName { get; set; }
        public int CourseTypeId { get; set; }
        public CourseType CourseType { get; set; }
        public int ExpectedHoursPerWeek { get; set; }
        public int ExpectedGroupsCount { get; set; }
        public int Year { get; set; }

        public List<CourseLesson> CourseLessons { get; set; }

        public Course(
            string courseName,
            int courseTypeId,
            CourseType courseType,
            int expectedHoursPerWeek,
            int expectedGroupsCount,
            int year
        )
        {
            CourseName = courseName;
            CourseType = courseType;
            ExpectedHoursPerWeek = expectedHoursPerWeek;
            ExpectedGroupsCount = expectedGroupsCount;
            Year = year;
            CourseTypeId = courseTypeId;
        }
    }
}
