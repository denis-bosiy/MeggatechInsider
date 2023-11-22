using Api.Models.EducationalPlan.Difference;
using Application.Models.EducationalPlan;

namespace Api.Mappers.EducationalPlan
{
    public static class DifferencesMapper
    {
        public static DifferencesResponseDto Map( this IEnumerable<AssignmentDifference> differences )
        {
            return new DifferencesResponseDto()
            {
                Differences = differences.Select( x => x.Map() ).ToList()
            };
        }

        public static DifferenceDto Map( this AssignmentDifference difference )
        {
            return new DifferenceDto()
            {
                Name = difference.Name,
                GroupsCount = difference.GroupsCount,
                PlanGroupsCount = difference.PlanGroupsCount
            };
        }
    }
}
