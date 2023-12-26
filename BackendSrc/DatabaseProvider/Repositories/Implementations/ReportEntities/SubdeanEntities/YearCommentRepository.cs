using DatabaseProvider.Repositories.Abstractions.ReportEntities.SubdeanEntities;
using Domain.ReportEntities.SubdeanEntities;

namespace DatabaseProvider.Repositories.Implementations.ReportEntities.SubdeanEntities
{
    public class YearCommentRepository : Repository<YearComment>, IYearCommentRepository
    {
        public YearCommentRepository( ApplicationContext context ) 
            : base( context )
        { }

        public YearComment GetById( int id ) => Entities.Where( c => c.Id == id ).FirstOrDefault();
    }
}
