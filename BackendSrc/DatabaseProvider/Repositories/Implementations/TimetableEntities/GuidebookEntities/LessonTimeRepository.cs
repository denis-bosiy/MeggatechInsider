using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities.GuidebookEntities
{
    public class LessonTimeRepository : Repository<LessonTime>, ILessonTimeRepository
    {
        public LessonTimeRepository( ApplicationContext context ) 
            : base( context )
        {
        }

        public List<LessonTime> GetAll() => Entities.ToList();

        public LessonTime GetById( int id ) => Entities.Where( e => e.Id == id ).FirstOrDefault();

        public List<LessonTime> GetByYear( int year ) => Entities.Where( e => e.Year == year ).ToList();
    }
}
