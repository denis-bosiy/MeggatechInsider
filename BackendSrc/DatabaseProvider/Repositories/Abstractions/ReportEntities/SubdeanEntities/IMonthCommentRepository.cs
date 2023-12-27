using Domain.ReportEntities.SubdeanEntities;

namespace DatabaseProvider.Repositories.Abstractions.ReportEntities.SubdeanEntities
{
    public interface IMonthCommentRepository : IRepository<MonthComment>
    {
        MonthComment GetById( int id );
    }
}
