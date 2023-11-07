using Application.Abstractions.StudyingActivityServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.StudyingActivityServices
{
    public static class StuduingActivityBindings
    {
        public static IServiceCollection AddStudyingActivities( this IServiceCollection services )
        {
            services.AddScoped<IPairTimeService, PairTimeService>();

            return services;
        }
    }
}
