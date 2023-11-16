using Domain.TimetableEntities.LessonEntities;

namespace Domain.TeacherEntities
{
    public class Teacher : Entity
    {
        public string TeacherName { get; set; }
        public int TeacherCategoryId
        {
            get => TeacherCategory.Id;
            set => TeacherCategoryId = value;
        }
        public TeacherCategory TeacherCategory { get; set; }
        public bool TeacherCategoryAffectsOnSalary { get; set; }
        public int ContractTypeId
        {
            get => ContractType.Id;
            set => ContractTypeId = value;
        }
        public ContractType ContractType { get; set; }
        public bool ContractTypeAffectsOnSalary { get; set; }
        public int EducationId
        {
            get => Education.Id;
            set => EducationId = value;
        }
        public Education Education { get; set; }
        public bool IsClassTeacher { get; set; }
        public bool AdvancedSubjectsAffectOnSalary { get; set; }
        public bool EgeAffectsOnSalary { get; set; }
        public DateTime EmploymentDate { get; set; }
        public int ExperienceInYearsOnEmploymentDate { get; set; }
        public DateTime BirthdayDate { get; set; }
        public int Year { get; set; }

        public List<Lesson> Lessons { get; set; }

        public Teacher()
        {
        }

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
            DateTime employmentDate,
            int experienceInYearsOnEmploymentDate,
            DateTime birthdayDate,
            int year )
        {
            TeacherName = teacherName;
            TeacherCategory = teacherCategory;
            TeacherCategoryAffectsOnSalary = teacherCategoryAffectsOnSalary;
            ContractType = contractType;
            ContractTypeAffectsOnSalary = contractTypeAffectsOnSalary;
            IsClassTeacher = isClassTeacher;
            Education = education;
            AdvancedSubjectsAffectOnSalary = advancedSubjectsAffectOnSalary;
            EgeAffectsOnSalary = egeAffectsOnSalary;
            EmploymentDate = employmentDate;
            ExperienceInYearsOnEmploymentDate = experienceInYearsOnEmploymentDate;
            BirthdayDate = birthdayDate;
            Year = year;
        }
    }
}