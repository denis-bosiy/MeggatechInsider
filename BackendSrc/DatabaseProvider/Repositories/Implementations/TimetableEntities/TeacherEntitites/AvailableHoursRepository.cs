using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.TeacherEntitites;

public class AvailableHoursRepository : Repository<AvailableHours>, IAvailableHoursRepository
{
    public AvailableHoursRepository( ApplicationContext context ) : base( context )
    {
    }

    public List<AvailableHours> GetAll() => Entities.Include( a => a.LessonTime ).ToList();

    public AvailableHours GetById( int id ) =>
        Entities.FirstOrDefault( a => a.Id == id ) ?? throw new InvalidOperationException();
}