using Application.Implementations.EducationalPlan;
using Application.Implementations.StudyingActivityServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class ApplicationBindings
    {
        public static IServiceCollection AddApplication( this IServiceCollection services )
        {
            services.AddStudyingActivities();
            services.AddEducationalPlanServices();

            return services;
        }
    }
}
