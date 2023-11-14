using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.SubjectEntities
{
    public static class SubjectBindings
    {
        public static IServiceCollection AddSubjectRepositories( this IServiceCollection services )
        {
            services.AddScoped<IPaymentTypeRepository, PaymentTypeRepository>();
            services.AddScoped<ISubjectCategoryRepository, SubjectCategoryRepository>();
            services.AddScoped<ISubjectRepository, SubjectRepository>();
            services.AddScoped<ISubjectTypeRepository, SubjectTypeRepository>();

            return services;
        }
    }
}
