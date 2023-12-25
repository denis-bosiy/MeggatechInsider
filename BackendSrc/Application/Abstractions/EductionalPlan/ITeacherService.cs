using Domain.TeacherEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface ITeacherService
    {
        public List<Teacher> GetTeachersByYear( int year );

        public void AddTeacher(
            int year, 
            string name,
            string category,
            bool categoryPayrollAccounting,
            string workingContract,
            bool workingContractPayrollAccounting, 
            string education,
            bool isClassroomTeacher,
            bool inDepthSubjectPayrollAccounting,
            bool egeAffectsOnSalary,
            DateOnly workingStartDate,
            int workingExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay );

        public void DeleteTeacher( int id );

        public void UpdateTeacher( 
            int year,
            string name,
            string category,
            bool categoryPayrollAccounting,
            string workingContract,
            bool workingContractPayrollAccounting,
            string education,
            bool isClassroomTeacher,
            bool inDepthSubjectPayrollAccounting,
            bool egeAffectsOnSalary,
            DateOnly workingStartDate,
            int workingExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay );

        public bool IsExistingTeacher( int id );
    }
}
