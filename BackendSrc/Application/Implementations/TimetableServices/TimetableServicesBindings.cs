using Application.Abstractions.TImetableServices;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Implementations.TimetableServices;

public static class TimetableServicesBindings
{
    public static IServiceCollection AddTimetableServices( this IServiceCollection services )
    {
        services.AddScoped<ITeacherTimetableService, TeacherTimetableService>();

        return services;
    }
}