using Domain.TimetableEntities.LessonEntities;

namespace Domain.TeacherEntities
{
    public class Teacher : Entity
    {
        public string TeacherName { get; set; }
        public int TeacherCategoryId { get; set; }
        public TeacherCategory TeacherCategory { get; set; }
        public bool TeacherCategoryAffectsOnSalary { get; set; }
        public int ContractTypeId { get; set; }
        public ContractType ContractType { get; set; }
        public bool ContractTypeAffectsOnSalary { get; set; }
        public int EducationId { get; set; }
        public Education Education { get; set; }
        public bool IsClassTeacher { get; set; }
        public bool AdvancedSubjectsAffectOnSalary { get; set; }
        public bool EgeAffectsOnSalary { get; set; }
        public DateOnly EmploymentDate { get; set; }
        public int ExperienceInYearsOnEmploymentDate { get; set; }
        public DateOnly BirthdayDate { get; set; }
        public int Year { get; set; }

        public IEnumerable<Lesson> Lessons { get; } = new List<Lesson>();

        public Teacher(
            string teacherName,
            bool teacherCategoryAffectsOnSalary,
            bool contractTypeAffectsOnSalary,
            bool isClassTeacher,
            bool advancedSubjectsAffectOnSalary,
            bool egeAffectsOnSalary,
            DateOnly employmentDate,
            int experienceInYearsOnEmploymentDate,
            DateOnly birthdayDate,
            int year )
        {
            TeacherName = teacherName;
            TeacherCategoryAffectsOnSalary = teacherCategoryAffectsOnSalary;
            ContractTypeAffectsOnSalary = contractTypeAffectsOnSalary;
            IsClassTeacher = isClassTeacher;
            AdvancedSubjectsAffectOnSalary = advancedSubjectsAffectOnSalary;
            EgeAffectsOnSalary = egeAffectsOnSalary;
            EmploymentDate = employmentDate;
            ExperienceInYearsOnEmploymentDate = experienceInYearsOnEmploymentDate;
            BirthdayDate = birthdayDate;
            Year = year;
        }
    }
}