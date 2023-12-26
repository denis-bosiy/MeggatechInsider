using Domain.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities
{
    public interface IGenericStudentGroupRepository
    {
        StudentGroup GetByGuid( string guid );
    }
}
