using Application.Abstractions.EductionalPlan;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.EducationalPlan
{
    public static class EducationalPlanBindings
    {
        public static IServiceCollection AddEducationalPlanServices( this IServiceCollection services )
        {
            services.AddScoped<ITeacherService, TeacherService>();
            services.AddScoped<ISubjectService, SubjectService>();
            services.AddScoped<IAssignmentService, AssignmentService>();

            return services;
        }
    }
}
