using Core.Models.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;

public interface IClassStudentGroupRepository<T> : IRepository<T> where T: StudentGroup
{
    public List<T> GetAll();
    public T GetById( int id );
}