using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.TeacherEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities;

public class TeacherRepository : Repository<Teacher>, ITeacherRepository
{
    public TeacherRepository( ApplicationContext context )
        : base( context ) { }

    public List<Teacher> GetBatchByYear( int year ) =>
        Entities
            .Where( t => t.Year == year )
            .Include( t => t.TeacherCategory )
            .Include( t => t.ContractType )
            .Include( t => t.Education )
            .ToList();

    public Teacher GetById( int id ) =>
        Entities.FirstOrDefault( t => t.Id == id ) ?? throw new InvalidOperationException();

    public List<Teacher> GetByCategoryId( int id ) => Entities.Where( t => t.TeacherCategoryId == id ).ToList();

    public List<Teacher> GetByContractTypeId( int id ) => Entities.Where( t => t.ContractTypeId == id ).ToList();

    public List<Teacher> GetByEducationId( int id ) => Entities.Where( t => t.EducationId == id ).ToList();
    public void Update( Teacher teacher ) => Entities.Update( teacher );
    public Teacher GetTeacherByName( string teacherName ) => Entities.Where( s => s.TeacherName == teacherName ).FirstOrDefault();
}