using Core.Models.SubjectEntities;

namespace DatabaseProvider.Repositories.Abstractions.SubjectEntities;

public interface ISubjectCategoryRepository : IRepository<SubjectCategory>
{
    public List<SubjectCategory> GetAll();
    public SubjectCategory GetById( int id );
}