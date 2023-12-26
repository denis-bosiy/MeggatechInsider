using Application.Abstractions.TimetableServices;
using Application.Abstractions.TimetableServices.StudentGroupServices;
using Application.Implementations.TimetableServices.StudentGroupServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.TimetableServices;

public static class TimetableServicesBindings
{
    public static IServiceCollection AddTimetableServices( this IServiceCollection services )
    {
        services.AddScoped<ITeacherTimetableService, TeacherTimetableService>();
        services.AddScoped<ITimetableService, TimetableService>();

        services.AddScoped<IStudentGroupService, StudentGroupService>();

        return services;
    }
}