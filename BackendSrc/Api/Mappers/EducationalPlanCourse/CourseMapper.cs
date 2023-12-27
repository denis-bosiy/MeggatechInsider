using Api.Models.EducationPlanCourses.Courses;
using Api.Models.EducationPlanCourses.Teacher;
using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;

namespace Api.Mappers.EducationalPlanCourse
{
    public static class CourseMapper
    {
        private static CourseDto Map( this Course course ) =>
        new( 
            course.Id,
            course.CourseName,
            course.CourseType.CourseTypeName,
            course.ExpectedHoursPerWeek,
            course.ExpectedGroupsCount );

        public static CoursesListResponseDto Map( this IEnumerable<Course> courses ) =>
            new CoursesListResponseDto() { Courses = courses.Select( Map ).ToList() };
    }
}
