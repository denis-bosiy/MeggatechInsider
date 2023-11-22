using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.TeacherEntities
{
    public static class TeacherBindings
    {
        public static IServiceCollection AddTeacherRepositories( this IServiceCollection services )
        {
            services.AddScoped<IContractTypeRepository, ContractTypeRepository>();
            services.AddScoped<IEducationRepository, EducationRepository>();
            services.AddScoped<ITeacherCategoryRepository, TeacherCategoryRepository>();
            services.AddScoped<ITeacherRepository, TeacherRepository>();

            return services;
        }
    }
}
