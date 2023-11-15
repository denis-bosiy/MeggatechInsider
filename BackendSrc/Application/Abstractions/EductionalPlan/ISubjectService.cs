using Domain.SubjectEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface ISubjectService
    {
        List<Subject> GetSubjectsByYear( int year );
    }
}
