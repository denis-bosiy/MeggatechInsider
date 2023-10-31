using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class EducationRepository : Repository<Education>, IEducationRepository
{
    public EducationRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<Education> GetAll() => Entities.ToList();

    public Education GetById( int id ) =>
        Entities.FirstOrDefault( e => e.Id == id ) ?? throw new InvalidOperationException();
}