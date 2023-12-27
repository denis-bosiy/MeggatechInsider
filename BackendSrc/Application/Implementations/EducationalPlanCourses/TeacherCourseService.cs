using Application.Abstractions.EducationalPlanCourses;
using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.CourseEntities.CourceTeachers;
using Domain.TeacherEntities;

namespace Application.Implementations.EducationalPlanCourses
{
    internal class TeacherCourseService : ITeacherCourseService
    {
        private readonly ICourseTeacherRepository _courseTeacherRepository;
        private readonly IContractTypeRepository _contractTypeRepository;

        public TeacherCourseService( ICourseTeacherRepository courseTeacherRepository, IContractTypeRepository contractTypeRepository )
        {
            _courseTeacherRepository = courseTeacherRepository;
            _contractTypeRepository = contractTypeRepository;
        }
        public List<CourseTeacher> GetTeachersCourseByYear( int year )
        {
            return _courseTeacherRepository.GetCourseTeachersByYear( year );
        }

        public void UpdateTeacherCourse(
            int year,
            int id,
            string name,
            string workingContract,
            DateOnly workingStartDate,
            int workExperience,
            int workExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay,
            int age )
        {
            ContractType contractType = _contractTypeRepository.GetContractTypeByName( workingContract );

            if ( contractType is not null )
            {
                CourseTeacher courseTeacher = new CourseTeacher
                {
                    Id = id,
                    CourseTeacherName = name,
                    ContractTypeId = contractType.Id,
                    BirthdayDate = birthDay,
                    ExperienceInYearsOnEmploymentDate = workExperienceAtTheTimeOfTheEmployment,
                    EmploymentDate = workingStartDate,
                    Year = year
                };

                _courseTeacherRepository.Update( courseTeacher );
            }
        }

        public void AddTeacherCourse(
            int id,
            int year,
            string name,
            string workingContract,
            DateOnly workingStartDate,
            int workExperience,
            int workExperienceAtTheTimeOfTheEmployment,
            DateOnly birthDay,
            int age )
        {
            ContractType contractType = _contractTypeRepository.GetContractTypeByName( workingContract );

            if ( contractType is not null )
            {
                CourseTeacher courseTeacher = new CourseTeacher
                {
                    Id = id,
                    CourseTeacherName = name,
                    ContractTypeId = contractType.Id,
                    BirthdayDate = birthDay,
                    ExperienceInYearsOnEmploymentDate = workExperienceAtTheTimeOfTheEmployment,
                    EmploymentDate = workingStartDate,
                    Year = year
                };

                _courseTeacherRepository.Update( courseTeacher );
            }
        }

        public void DeleteTeacherCourse( int id )
        {
            CourseTeacher courseTeacher = _courseTeacherRepository.GetById( id );
            if ( courseTeacher is not null )
            {
                _courseTeacherRepository.Remove( courseTeacher );
            }
        }

        public CourseTeacher GetTeacherCourseById( int id )
        {
            return _courseTeacherRepository.GetById( id );
        }
    }
}
