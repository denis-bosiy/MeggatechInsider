using Api.Builders.Timetable.TeacherTimetableDtoBuilder;
using Api.Builders.Timetable.TimetableDtoBuilders;

namespace Api.Builders.Timetable;

public static class TimetableBuildersBindings
{
    public static IServiceCollection AddTimetableBuilders( this IServiceCollection services )
    {
        services.AddScoped<ITeacherTimetableDtoBuilder, TeacherTimetableDtoBuilder.TeacherTimetableDtoBuilder>();
        services.AddScoped<ITimetableDtoBuilder, TimetableDtoBuilder>();

        return services;
    }
}