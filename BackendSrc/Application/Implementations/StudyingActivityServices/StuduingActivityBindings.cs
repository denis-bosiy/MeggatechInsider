using Application.Abstractions.StudyingActivityServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.StudyingActivityServices
{
    public static class StuduingActivityBindings
    {
        public static IServiceCollection AddStudyingActivities( this IServiceCollection services )
        {
            services.AddScoped<IPairTimeService, PairTimeService>();
            services.AddScoped<ILessonTimeService, LessonTimeService>();
            services.AddScoped<IParadeTimeService, ParadeTimeService>();

            return services;
        }
    }
}
