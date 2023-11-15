using Domain.TimetableEntities.LessonEntities;

namespace Domain.TeacherEntities
{
    public class Teacher : Entity
    {
        public string TeacherName { get; set; }
        public int TeacherCategoryId => TeacherCategory.Id;
        public TeacherCategory TeacherCategory { get; set; }
        public bool TeacherCategoryAffectsOnSalary { get; set; }
        public int ContractTypeId => ContractType.Id;
        public ContractType ContractType { get; set; }
        public bool ContractTypeAffectsOnSalary { get; set; }
        public int EducationId => Education.Id;
        public Education Education { get; set; }
        public bool IsClassTeacher { get; set; }
        public bool AdvancedSubjectsAffectOnSalary { get; set; }
        public bool EgeAffectsOnSalary { get; set; }
        public DateOnly EmploymentDate { get; set; }
        public int ExperienceInYearsOnEmploymentDate { get; set; }
        public DateOnly BirthdayDate { get; set; }
        public int Year { get; set; }

        public List<Lesson> Lessons { get; set; }

        public Teacher(
            string teacherName,
            TeacherCategory teacherCategory,
            bool teacherCategoryAffectsOnSalary,
            ContractType contractType,
            bool contractTypeAffectsOnSalary,
            Education education,
            bool isClassTeacher,
            bool advancedSubjectsAffectOnSalary,
            bool egeAffectsOnSalary,
            DateOnly employmentDate,
            int experienceInYearsOnEmploymentDate,
            DateOnly birthdayDate,
            int year )
        {
            TeacherName = teacherName;
            TeacherCategory = teacherCategory;
            TeacherCategoryAffectsOnSalary = teacherCategoryAffectsOnSalary;
            ContractType = contractType;
            ContractTypeAffectsOnSalary = contractTypeAffectsOnSalary;
            Education = education;
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