using Domain.CourseEntities.CourceTeachers;

namespace Application.Abstractions.EducationalPlanCourses
{
    public interface ITeacherCourseService
    {
        public List<CourseTeacher> GetTeachersCourseByYear( int year );

        public CourseTeacher GetTeacherCourseById( int id );

        public void UpdateTeacherCourse(
            int year,
            int id,
            string name,
            string workingContract,
            DateOnly workingStartDate,
            int workExperience,
            int workExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay,
            int age );

        public void AddTeacherCourse(
            int id,
            int year,
            string name,
            string workingContract,
            DateOnly workingStartDate,
            int workExperience,
            int workExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay,
            int age );

        public void DeleteTeacherCourse( int id );
    }
}
