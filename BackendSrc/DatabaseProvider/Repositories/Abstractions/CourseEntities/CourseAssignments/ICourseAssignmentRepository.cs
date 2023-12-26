using Domain.CourseEntities.CourseAssignments;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseAssignments
{
    public interface ICourseAssignmentRepository : IRepository<CourseAssignment>
    {
        CourseAssignment GetById( int id );
    }
}
