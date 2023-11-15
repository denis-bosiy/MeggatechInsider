using Application.Abstractions.EductionalPlan;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;

namespace Application.Implementations.EducationalPlan
{
    internal sealed class SubjectService : ISubjectService
    {
        private readonly ISubjectRepository _subjectRepository;

        public SubjectService( ISubjectRepository subjectRepository )
        {
            _subjectRepository = subjectRepository;
        }

        public List<Subject> GetSubjectsByYear( int year )
        {
            return _subjectRepository.GetBatchByYear( year );
        }
    }
}
