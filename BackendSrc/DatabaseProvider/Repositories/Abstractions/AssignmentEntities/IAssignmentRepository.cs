using Domain.AssignmentEntities;

namespace DatabaseProvider.Repositories.Abstractions.AssignmentEntities
{
    public interface IAssignmentRepository : IRepository<Assignment>
    {
        public List<Assignment> GetBatchByYear( int year );
        public Assignment GetById( int id );
    }
}
