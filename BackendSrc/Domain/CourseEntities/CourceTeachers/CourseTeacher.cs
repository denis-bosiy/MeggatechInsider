using Domain.TeacherEntities;

namespace Domain.CourseEntities.CourceTeachers
{
    public class CourseTeacher : Entity
    {
        public string CourseTeacherName { get; set; }
        public int ContractTypeId => ContractType.Id;
        public ContractType ContractType { get; set; }
        public DateOnly EmploymentDate { get; set; }
        public int ExperienceInYearsOnEmploymentDate { get; set; }
        public DateOnly BirthdayDate { get; set; }
        public int Year { get; set; }

        public List<CourseLesson> CourseLessons { get; set; }

        public CourseTeacher(
            string courseTeacherName,
            ContractType contractType,
            DateOnly employmentDate,
            int experienceInYearsOnEmploymentDate,
            DateOnly birthdayDate,
            int year )
        {
            CourseTeacherName = courseTeacherName;
            ContractType = contractType;
            EmploymentDate = employmentDate;
            ExperienceInYearsOnEmploymentDate = experienceInYearsOnEmploymentDate;
            BirthdayDate = birthdayDate;
            Year = year;
        }
    }
}
