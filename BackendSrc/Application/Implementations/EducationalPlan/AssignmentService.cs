using Application.Abstractions.EductionalPlan;
using Application.Models.EducationalPlan;
using DatabaseProvider.Repositories.Abstractions.AssignmentEntities;
using Domain.AssignmentEntities;

namespace Application.Implementations.EducationalPlan
{
    internal sealed class AssignmentService : IAssignmentService
    {
        private readonly IAssignmentRepository _assignmentRepository;

        public AssignmentService( IAssignmentRepository assignmentRepository )
        {
            _assignmentRepository = assignmentRepository;
        }

        public List<Assignment> GetAssignmentsByYear( int year )
        {
            return _assignmentRepository.GetBatchByYear( year );
        }

        public List<AssignmentDifference> GetDifferencesByYear( int year )
        {
            // TODO Реализовать
            return new List<AssignmentDifference> { new AssignmentDifference() };
        }
    }
}
