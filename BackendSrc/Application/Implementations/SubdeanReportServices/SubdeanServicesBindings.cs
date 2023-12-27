using Microsoft.Extensions.DependencyInjection;
using Application.Abstractions.SubdeanReportServices;

namespace Application.Implementations.SubdeanReportServices
{
    public static class SubdeanServicesBindings
    {
        public static IServiceCollection AddSubdeanReportServices( this IServiceCollection services )
        {
            services.AddScoped<IMonthReportService, MonthReportService>();

            return services;
        }
    }
}
