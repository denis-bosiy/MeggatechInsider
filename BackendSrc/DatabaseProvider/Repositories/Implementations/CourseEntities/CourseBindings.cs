using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseAssignments;
using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseEducationalPlans;
using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTeachers;
using DatabaseProvider.Repositories.Abstractions.CourseEntities.CourseTimetables;
using DatabaseProvider.Repositories.Implementations.CourseEntities.CourseAssignments;
using DatabaseProvider.Repositories.Implementations.CourseEntities.CourseEducationalPlans;
using DatabaseProvider.Repositories.Implementations.CourseEntities.CourseTeachers;
using DatabaseProvider.Repositories.Implementations.CourseEntities.CourseTimetables;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.CourseEntities
{
    public static class CourseBindings
    {
        public static IServiceCollection AddCourseRepositories( this IServiceCollection services )
        {
            services.AddScoped<ICourseAssignmentRepository, CourseAssignmentRepository>();

            services.AddScoped<ICourseEducationalPlanHoursRepository, CourseEducationalPlanHoursRepository>();
            services.AddScoped<ICourseEducationalPlanRepository, CourseEducationalPlanRepository>();

            services.AddScoped<ICourseTeacherAvailableHoursRepository, CourseTeacherAvailableHoursRepository>();
            services.AddScoped<ICourseTeacherRepository, CourseTeacherRepository>();

            services.AddScoped<ICourseLessonRepository, CourseLessonRepository>();

            return services;
        }
    }
}
