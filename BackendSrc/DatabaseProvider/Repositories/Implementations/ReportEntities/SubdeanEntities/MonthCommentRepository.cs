using DatabaseProvider.Repositories.Abstractions.ReportEntities.SubdeanEntities;
using Domain.ReportEntities.SubdeanEntities;

namespace DatabaseProvider.Repositories.Implementations.ReportEntities.SubdeanEntities
{
    public class MonthCommentRepository : Repository<MonthComment>, IMonthCommentRepository
    {
        public MonthCommentRepository( ApplicationContext context ) 
            : base( context )
        { }

        public MonthComment GetById( int id ) => Entities.Where( c => c.Id == id ).FirstOrDefault();
    }
}
