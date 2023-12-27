using DatabaseProvider.Repositories.Implementations.AssignmentEntities;
using DatabaseProvider.Repositories.Implementations.CourseEntities;
using DatabaseProvider.Repositories.Implementations.EducationalPlanEntities;
using DatabaseProvider.Repositories.Implementations.ReportEntities;
using DatabaseProvider.Repositories.Implementations.SubjectEntities;
using DatabaseProvider.Repositories.Implementations.TeacherEntities;
using DatabaseProvider.Repositories.Implementations.TimetableEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories
{
    public static class RepositoryBindings
    {
        public static IServiceCollection AddDatabaseRepositories( this IServiceCollection services )
        {
            services.AddAssignmentRepositories();
            services.AddCourseRepositories();
            services.AddEducationalPlanRepositories();
            services.AddReportRepositories();
            services.AddSubjectRepositories();
            services.AddTeacherRepositories();
            services.AddTimetableRepositories(); 

            return services;
        }
    }
}
