using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.StudentGroupEntities
{
    public class GenericStudentGroupRepository : IGenericStudentGroupRepository
    {
        public StudentGroup GetByGuid( string guid )
        {
            throw new NotImplementedException();
        }
    }
}
