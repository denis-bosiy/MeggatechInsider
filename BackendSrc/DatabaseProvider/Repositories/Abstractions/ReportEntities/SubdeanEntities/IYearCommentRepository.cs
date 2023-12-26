using Domain.ReportEntities.SubdeanEntities;

namespace DatabaseProvider.Repositories.Abstractions.ReportEntities.SubdeanEntities
{
    public interface IYearCommentRepository : IRepository<YearComment>
    {
        YearComment GetById( int id );
    }
}
