using Api.Builders.Timetable.TeacherTimetableDtoBuilder;

namespace Api.Builders.Timetable;

public static class TimetableBuildersBindings
{
    public static IServiceCollection AddTimetableBuilders( this IServiceCollection services )
    {
        services.AddScoped<ITeacherTimetableDtoBuilder, TeacherTimetableDtoBuilder.TeacherTimetableDtoBuilder>();

        return services;
    }
}