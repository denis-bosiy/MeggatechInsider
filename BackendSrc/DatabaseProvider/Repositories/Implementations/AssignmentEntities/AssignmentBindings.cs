using DatabaseProvider.Repositories.Abstractions.AssignmentEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.AssignmentEntities
{
    public static class AssignmentBindings
    {
        public static IServiceCollection AddAssignmentRepositories( this IServiceCollection services )
        {
            services.AddScoped<IAssignmentRepository, AssignmentRepository>();

            return services;
        }
    }
}
