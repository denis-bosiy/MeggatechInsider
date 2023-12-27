using Application.Abstractions.EducationalPlanCourses;
using DatabaseProvider.Repositories.Abstractions.CourseEntities.Courses;
using Domain.CourseEntities.Courses;

namespace Application.Implementations.EducationalPlanCourses
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _courseRepository;
        private readonly ICourseTypeRepository _courseTypeRepository;

        public CourseService( ICourseRepository courseRepository, ICourseTypeRepository courseTypeRepository )
        {
            _courseRepository = courseRepository;
            _courseTypeRepository = courseTypeRepository;
        }
        public List<Course> GetCoursesByYear( int year )
        {
            return _courseRepository.GetCoursesByYear( year );
        }

        public Course GetCourseById( int id )
        {
            return _courseRepository.GetCourseById( id );
        }

        public void UpdateCourse(
            int id,
            string name,
            string type,
            int hoursByPlan,
            int numberOfGroups )
        {
            CourseType courseType = _courseTypeRepository.GetCourseTypeByName( type );
            if ( courseType is not null )
            {
                Course course = new Course
                {
                    Id = id,
                    CourseName = name,
                    CourseTypeId = courseType.Id,
                    ExpectedHoursPerWeek = hoursByPlan,
                    ExpectedGroupsCount = numberOfGroups
                };
                _courseRepository.Update( course );
            }
        }

        public void AddCourse(
            int id,
            string name,
            string type,
            int hoursByPlan,
            int numberOfGroups )
        {

            CourseType courseType = _courseTypeRepository.GetCourseTypeByName( type );
            if ( courseType is not null )
            {
                Course course = new Course
                {
                    Id = id,
                    CourseName = name,
                    CourseTypeId = courseType.Id,
                    ExpectedHoursPerWeek = hoursByPlan,
                    ExpectedGroupsCount = numberOfGroups
                };
                _courseRepository.Add( course );
            }
        }

        public void DeleteCourse( int id )
        {
            Course course = _courseRepository.GetCourseById( id );
            if ( course is not null )
            {
                _courseRepository.Remove( course );
            }
        }
    }
}
