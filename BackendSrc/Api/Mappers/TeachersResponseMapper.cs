using Api.Dto.SearchResponse;
using Domain.TeacherEntities;

namespace Api.Mappers;

public static class TeachersResponseMapper
{
    private static TeachersResponseDto Map( this Teacher teacher ) =>
        new(
            teacher.TeacherName,
            teacher.TeacherCategory.TeacherCategoryName,
            teacher.TeacherCategoryAffectsOnSalary,
            teacher.ContractType.ContractTypeName,
            teacher.ContractTypeAffectsOnSalary,
            teacher.Education.EducationName,
            teacher.IsClassTeacher,
            teacher.AdvancedSubjectsAffectOnSalary,
            teacher.EgeAffectsOnSalary,
            teacher.EmploymentDate,
            DateOnly.FromDateTime( DateTime.Today ).Year - teacher.EmploymentDate.Year +
            teacher.ExperienceInYearsOnEmploymentDate, // TODO: нужно ли здесь учитывать суммарный опыт?
            teacher.ExperienceInYearsOnEmploymentDate);

    public static IReadOnlyList<TeachersResponseDto> Map( this IEnumerable<Teacher> teachers ) =>
        teachers.Select( Map ).ToList();
}