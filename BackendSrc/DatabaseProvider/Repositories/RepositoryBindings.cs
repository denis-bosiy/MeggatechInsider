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
            services.AddSubjectRepositories();
            services.AddTeacherRepositories();
            services.AddTimetableRepositories();

            return services;
        }
    }
}
