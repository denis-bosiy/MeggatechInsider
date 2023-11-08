using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.GuidebookEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}
