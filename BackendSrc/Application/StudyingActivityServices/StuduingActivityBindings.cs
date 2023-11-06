using Application.StudyingActivityServices.Abstractions;
using Application.StudyingActivityServices.Implementations;
using Microsoft.Extensions.DependencyInjection;

namespace Application.StudyingActivityServices
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
