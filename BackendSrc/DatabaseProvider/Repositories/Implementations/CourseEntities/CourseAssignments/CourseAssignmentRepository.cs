using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseAssignments;
using Domain.CourseEntities.CourseAssignments;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities.CourseAssignments
{
    public class CourseAssignmentRepository : Repository<CourseAssignment>, ICourseAssignmentRepository
    {
        public CourseAssignmentRepository( ApplicationContext context )
            : base( context ) 
        { }

        public CourseAssignment GetById( int id ) 
            => Entities.Where( a => a.Id == id ).FirstOrDefault();
    }
}
