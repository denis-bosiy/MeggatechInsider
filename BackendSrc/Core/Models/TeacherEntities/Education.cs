using Domain;

namespace Core.Models.TeacherEntities;

public class Education : Entity
{
    public string Name { get; set; }

    public List<Teacher> Teachers { get; set; }
}