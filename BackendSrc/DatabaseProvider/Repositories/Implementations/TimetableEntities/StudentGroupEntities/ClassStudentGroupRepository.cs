using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.StudentGroupEntities;

public class ClassStudentGroupRepository<T> : Repository<T>, IClassStudentGroupRepository<T> where T : StudentGroup
{
    public ClassStudentGroupRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<T> GetAll() => Entities.ToList();

    public T GetById( int id ) => Entities.FirstOrDefault( sg => sg.Id == id ) ?? throw new InvalidOperationException();
}