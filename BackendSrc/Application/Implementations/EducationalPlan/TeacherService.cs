using Application.Abstractions.EductionalPlan;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;

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
    }
}
