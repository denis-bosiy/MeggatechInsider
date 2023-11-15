using DatabaseProvider.Repositories.Abstractions.AssignmentEntities;
using Domain.AssignmentEntities;
using Domain.SubjectEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.AssignmentEntities
{
    public sealed class AssignmentRepository : Repository<Assignment>, IAssignmentRepository
    {
        public AssignmentRepository( ApplicationContext context )
            : base( context ) { }

        public List<Assignment> GetBatchByYear( int year ) =>
        Entities
            .Where( t => t.Year == year )
            .Include( s => s.Teacher )
            .Include( s => s.Subject )
            .ToList();

        public Assignment GetById( int id ) =>
            Entities.FirstOrDefault( s => s.Id == id ) ?? throw new InvalidOperationException();
    }
}
