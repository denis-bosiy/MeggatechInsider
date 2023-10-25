namespace Domain.TeacherEntities
{
    public class Teacher
    {
        public string TeacherName { get; init; }
        public TeacherCategory TeacherCategory { get; init; }
        public bool TeacherCategoryAffectsOnSalary { get; init; }
        public ContractType ContractType { get; init; }
        public bool ContractTypeAffectsOnSalary { get; init; }
        public Education Education { get; init; }
        public bool IsClassTeacher { get; init; }
        public bool AdvancedSubjectsAffectOnSalary { get; init; }
        public bool EgeAffectsOnSalary { get; init; }
        public DateOnly EmploymentDate { get; init; }
        public int ExperienceInYearsOnEmploymentDate { get; init; }
        public DateOnly BirthdayDate { get; init; }

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
            DateOnly birthdayDate )
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
        }
    }
}
