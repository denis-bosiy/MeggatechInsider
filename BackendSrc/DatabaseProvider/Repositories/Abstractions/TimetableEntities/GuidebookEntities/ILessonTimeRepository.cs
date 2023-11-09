using Domain.TimetableEntities.GuidebookEntities;

namespace DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities
{
    public interface ILessonTimeRepository : IRepository<LessonTime> 
    {
        public List<LessonTime> GetAll();
        public LessonTime GetById( int id );
    }
}
