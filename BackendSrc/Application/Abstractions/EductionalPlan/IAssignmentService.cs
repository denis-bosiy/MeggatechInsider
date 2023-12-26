using Application.Models.EducationalPlan;
using Domain.AssignmentEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface IAssignmentService
    {
        List<Assignment> GetAssignmentsByYear( int year );
        List<AssignmentDifference> GetDifferencesByYear( int year );
        void AddAssignment( int year, int classNumber, string subjectName, string teacherName, int groupCount);
        public void UpdateAssignment( int year, int classNumber, string subjectName, string teacherName, int groupCount );
        public void DeleteAssignment( int id );
        public Assignment GetAssignmentById( int id );
    }
}
