using Application.Implementations.EducationalPlan;
using Application.Implementations.StudyingActivityServices;
using Application.Implementations.TimetableServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class ApplicationBindings
    {
        public static IServiceCollection AddApplication( this IServiceCollection services )
        {
            services.AddStudyingActivities();
            services.AddEducationalPlanServices();
            services.AddTimetableServices();

            return services;
        }
    }
}
