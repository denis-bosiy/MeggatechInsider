using Core.Models.TeacherEntities;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class EducationRepository: Repository<Education>, IEducationRepository
{
    public EducationRepository(ApplicationContext context) : base(context)
    {
    }

    public List<Education> GetAll()
    {
        return Entities.ToList();
    }

    public Education GetById( int id )
    {
        return Entities.FirstOrDefault( e => e.Id == id ) ?? throw new InvalidOperationException();
    }
}