using Core.Models.TeacherEntities;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class TeacherRepository : Repository<Teacher>,ITeacherRepository
{
    public TeacherRepository(ApplicationContext context) : base(context)
    {
    }

    public List<Teacher> GetAll()
    {
        return Entities.Include( t => t.TeacherCategory )
            .Include( t => t.ContractType )
            .Include( t => t.Education )
            .ToList();
    }

    public Teacher GetById( int id )
    {
        return Entities.FirstOrDefault( t => t.Id == id ) ?? throw new InvalidOperationException();
    }

    public List<Teacher> GetByCategoryId( int id )
    {
        return Entities.Where( t => t.CategoryId == id ).ToList();
    }

    public List<Teacher> GetContractTypeId( int id )
    {
        return Entities.Where( t => t.ContractTypeId == id ).ToList();
    }

    public List<Teacher> GetByEducationId( int id )
    {
        return Entities.Where( t => t.EducationId == id ).ToList();
    }
}