using DatabaseProvider.Repositories.Abstractions.ReportEntities.SubdeanEntities;
using DatabaseProvider.Repositories.Implementations.ReportEntities.SubdeanEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.ReportEntities
{
    public static class ReportBindings
    {
        public static IServiceCollection AddReportRepositories( this IServiceCollection services )
        {
            services.AddScoped<IMonthCommentRepository, MonthCommentRepository>();
            services.AddScoped<IYearCommentRepository, YearCommentRepository>();

            return services;
        }
    }
}
