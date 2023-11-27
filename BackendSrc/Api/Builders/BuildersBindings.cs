using Api.Builders.Timetable;

namespace Api.Builders;

public static class BuildersBindings
{
    public static IServiceCollection AddBuilders( this IServiceCollection services )
    {
        services.AddTimetableBuilders();

        return services;
    }
}