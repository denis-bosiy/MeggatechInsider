using DatabaseProvider.Repositories.Abstractions.TimetableEntities.GuidebookEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.TeacherEntities;
using DatabaseProvider.Repositories.Implementations.TimetableEntities.GuidebookEntities;
using DatabaseProvider.Repositories.Implementations.TimetableEntities.LessonEntities;
using DatabaseProvider.Repositories.Implementations.TimetableEntities.StudentGroupEntities;
using DatabaseProvider.Repositories.Implementations.TimetableEntities.TeacherEntitites;
using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.Extensions.DependencyInjection;

namespace DatabaseProvider.Repositories.Implementations.TimetableEntities
{
    public static class TimetableBindings
    {
        public static IServiceCollection AddTimetableRepositories( this IServiceCollection services )
        {
            services.AddScoped<IPairTimeRepository, PairTimeRepository>();
            services.AddScoped<ILessonTimeRepository, LessonTimeRepository>();
            services.AddScoped<IParadeTimeRepository, ParadeTimeRepository>();

            services.AddScoped<ILessonRepository, LessonRepository>();

            services.AddScoped<IClassStudentGroupRepository<LiceumStudentGroup>, ClassStudentGroupRepository<LiceumStudentGroup>>();
            services.AddScoped<IClassStudentGroupRepository<ParallelStudentGroup>, ClassStudentGroupRepository<ParallelStudentGroup>>();
            services.AddScoped<IClassStudentGroupRepository<ClassStudentGroup>, ClassStudentGroupRepository<ClassStudentGroup>>();
            services.AddScoped<IClassStudentGroupRepository<VerticalSubgroupStudentGroup>, 
                ClassStudentGroupRepository<VerticalSubgroupStudentGroup>>();
            services.AddScoped<IClassStudentGroupRepository<HorizontalSubgroupStudentGroup>, 
                ClassStudentGroupRepository<HorizontalSubgroupStudentGroup>>();
            services.AddScoped<ITeacherTimetableRepository, TeacherTimetableRepository>();
            services.AddScoped<IAvailableHoursRepository, AvailableHoursRepository>();

            return services;
        }
    }
}
