using Application.Abstractions.EducationalPlanCourses;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.EducationalPlanCourses
{
    public static class EducationalPlanCoursesBinding
    {
        public static IServiceCollection AddEducationalPlanCoursesServices( this IServiceCollection services )
        {
            services.AddScoped<ITeacherCourseService, TeacherCourseService>();
            services.AddScoped<ICourseService, CourseService>();

            return services;
        }
    }
}
