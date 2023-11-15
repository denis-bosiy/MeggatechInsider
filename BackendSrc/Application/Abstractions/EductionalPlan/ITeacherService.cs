using Domain.TeacherEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface ITeacherService
    {
        public List<Teacher> GetTeachersByYear( int year );
    }
}
