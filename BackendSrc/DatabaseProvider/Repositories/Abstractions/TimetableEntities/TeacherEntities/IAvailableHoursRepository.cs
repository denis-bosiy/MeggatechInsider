using Domain.TimetableEntities.TeacherEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;

public interface IAvailableHoursRepository : IRepository<AvailableHours>
{
    public List<AvailableHours> GetAll();
    public AvailableHours GetById( int id );
}