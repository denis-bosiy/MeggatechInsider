using Application.Abstractions.EductionalPlan;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Application.Implementations.EducationalPlan
{
    internal sealed class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherService( ITeacherRepository teacherRepository )
        {
            _teacherRepository = teacherRepository;
        }

        public List<Teacher> GetTeachersByYear( int year )
        {
            return _teacherRepository.GetBatchByYear( year );
        }

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
            DateOnly birthDay )
        {
            Teacher newTeacher = new Teacher( 
                name, 
                categoryPayrollAccounting, 
                workingContractPayrollAccounting,
                isClassroomTeacher,
                inDepthSubjectPayrollAccounting,
                egeAffectsOnSalary,
                workingStartDate,
                workingExperienceAtTheTimeOfTheEmployment,
                birthDay,
                year
            );
            _teacherRepository.Add( newTeacher );
            _teacherRepository.SaveChanges();
        }

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
            DateOnly birthDay )
        {
            Teacher newTeacher = new Teacher(
                name,
                categoryPayrollAccounting,
                workingContractPayrollAccounting,
                isClassroomTeacher,
                inDepthSubjectPayrollAccounting,
                egeAffectsOnSalary,
                workingStartDate,
                workingExperienceAtTheTimeOfTheEmployment,
                birthDay,
                year
                );
            _teacherRepository.Update( newTeacher );
            _teacherRepository.SaveChanges();
        }

        public void DeleteTeacher( int id )
        {
            Teacher existingTeacher = _teacherRepository.GetById( id );

            if ( IsNull( existingTeacher ) )
            {
                return;
            }

            _teacherRepository.Remove( existingTeacher );
            _teacherRepository.SaveChanges();
        }

        public bool IsExistingTeacher( int id )
        {
            Teacher existingTeacher = _teacherRepository.GetById( id );

            return IsNull( existingTeacher );
        }

        private bool IsNull( Teacher teacher ) => teacher is null;
    }
}