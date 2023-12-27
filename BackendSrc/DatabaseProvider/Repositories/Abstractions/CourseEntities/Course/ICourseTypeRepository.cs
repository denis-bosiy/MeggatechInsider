using Domain.CourseEntities.CourceTeachers;
using Domain.CourseEntities.Courses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseProvider.Repositories.Abstractions.CourseEntities.Courses
{
    public interface ICourseTypeRepository : IRepository<CourseType>
    {
        public CourseType GetCourseTypeByName( string name );
    }
}
