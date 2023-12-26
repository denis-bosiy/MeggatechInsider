using Application.Abstractions.TimetableServices.StudentGroupServices;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Application.Implementations.TimetableServices.StudentGroupServices
{
    public class StudentGroupService : IStudentGroupService
    {
        private readonly IClassStudentGroupRepository<LiceumStudentGroup> _liceumStudentGroupRepository;
        private readonly IClassStudentGroupRepository<ParallelStudentGroup> _parallelStudentGroupRepository;
        private readonly IClassStudentGroupRepository<ClassStudentGroup> _classStudentGroupRepository;
        private readonly IClassStudentGroupRepository<VerticalSubgroupStudentGroup> _verticalSubgroupStudentGroupRepository;
        private readonly IClassStudentGroupRepository<HorizontalSubgroupStudentGroup> _horizontalSubgroupStudentGroupRepository;
        
        public StudentGroupService( 
            IClassStudentGroupRepository<LiceumStudentGroup> liceumStudentGroupRepository,
            IClassStudentGroupRepository<ParallelStudentGroup> parallelStudentGroupRepository,
            IClassStudentGroupRepository<ClassStudentGroup> classStudentGroupRepository,
            IClassStudentGroupRepository<VerticalSubgroupStudentGroup> verticalSubgroupStudentGroupRepository,
            IClassStudentGroupRepository<HorizontalSubgroupStudentGroup> horizontalSubgroupStudentGroupRepository )
        {
            _liceumStudentGroupRepository = liceumStudentGroupRepository;
            _parallelStudentGroupRepository = parallelStudentGroupRepository;
            _classStudentGroupRepository = classStudentGroupRepository;
            _verticalSubgroupStudentGroupRepository = verticalSubgroupStudentGroupRepository;
            _horizontalSubgroupStudentGroupRepository = horizontalSubgroupStudentGroupRepository;
        }

        public List<string> GetClassGuidsByStudentGroupGuid( string studentGroupGuid )
        {
            LiceumStudentGroup liceumStudentGroup = _liceumStudentGroupRepository.GetByGuid( studentGroupGuid );
            if ( liceumStudentGroup != null )
            {
                return _classStudentGroupRepository
                    .GetByYear( liceumStudentGroup.Year )
                    .Select( sg => sg.Guid )
                    .ToList();
            }

            ParallelStudentGroup parallelStudentGroup = _parallelStudentGroupRepository.GetByGuid( studentGroupGuid );
            if ( parallelStudentGroup != null )
            {
                return _classStudentGroupRepository
                    .GetByYear( parallelStudentGroup.Year )
                    .Where( c => c.Parallel == parallelStudentGroup.Parallel )
                    .Select( c => c.Guid )
                    .ToList();
            }

            return new List<string> { studentGroupGuid };
        }
    }
}
