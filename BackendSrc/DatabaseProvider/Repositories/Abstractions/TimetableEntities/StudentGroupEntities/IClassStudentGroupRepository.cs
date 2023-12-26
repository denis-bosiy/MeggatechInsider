using Domain.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;

public interface IClassStudentGroupRepository<T> : IRepository<T> where T : StudentGroup
{
    public List<T> GetAll();
    public T GetById( int id );
    public T GetByGuid( string guid );
    public List<T> GetByYear( int year );
}