using Core.Models.TimetableEntities.StudentGroupEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.StudentGroupEntities;

public class ClassStudentGroupRepository<T>: Repository<T>, IClassStudentGroupRepository<T> where T: StudentGroup
{
    public ClassStudentGroupRepository(ApplicationContext context) : base(context)
    {
    }

    public List<T> GetAll()
    {
        return Entities.ToList();
    }

    public T GetById( int id )
    {
        return Entities.FirstOrDefault( sg => sg.Id == id ) ?? throw new InvalidOperationException();
    }
}