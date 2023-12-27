using Api.Models.EducationalPlan.Teacher;
using Api.Models.EducationPlanCourses.Teacher;
using Domain.CourseEntities.CourceTeachers;
using Domain.TeacherEntities;

namespace Api.Mappers.EducationalPlanCourse
{
    public static class TeacherCourseMapper
    {
        private static CourseTeacherDto Map( this CourseTeacher teacher ) =>
        new(
            teacher.Id,
            teacher.CourseTeacherName,
            teacher.ContractType.ContractTypeName,
            teacher.EmploymentDate,
            DateOnly.FromDateTime( DateTime.Today ).Year
                - teacher.EmploymentDate.Year
                + teacher.ExperienceInYearsOnEmploymentDate,
            teacher.ExperienceInYearsOnEmploymentDate,
            teacher.BirthdayDate,
            DateOnly.FromDateTime( DateTime.Today ).Year
                - teacher.BirthdayDate.Year );

        public static CourseTeacherListResponseDto Map( this IEnumerable<CourseTeacher> teachers ) =>
            new CourseTeacherListResponseDto() { Teachers = teachers.Select( Map ).ToList() };
    }
}
