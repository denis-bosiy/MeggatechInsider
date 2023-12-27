using DatabaseProvider.Repositories.Abstractions.EducationalPlanEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.EducationalPlanEntities
{
    public static class EducationalPlanBindings
    {
        public static IServiceCollection AddEducationalPlanRepositories( this IServiceCollection services )
        {
            services.AddScoped<IEducationalPlanRepository, EducationalPlanRepository>();
            services.AddScoped<IEducationalPlanHoursByWeekRepository, EducationalPlanHoursByWeekRepository>();
            services.AddScoped<IEducationalPlanSubjectRepository, EducationalPlanSubjectRepository>();

            return services;
        }
    }
}
