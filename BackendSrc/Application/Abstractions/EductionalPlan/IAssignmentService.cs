using Application.Models.EducationalPlan;
using Domain.AssignmentEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface IAssignmentService
    {
        List<Assignment> GetAssignmentsByYear( int year );
        List<AssignmentDifference> GetDifferencesByYear( int year );
    }
}
