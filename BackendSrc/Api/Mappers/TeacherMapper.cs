using Api.Models.EducationalPlan.Teacher;
using Domain.TeacherEntities;

namespace Api.Mappers;

public static class TeacherMapper
{
    private static TeacherResponseDto Map( this Teacher teacher ) =>
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
            DateOnly.FromDateTime( DateTime.Today ).Year
                - teacher.EmploymentDate.Year
                + teacher.ExperienceInYearsOnEmploymentDate, // TODO: нужно ли здесь учитывать суммарный опыт?
            teacher.ExperienceInYearsOnEmploymentDate);

    public static TeachersResponseDto Map( this IEnumerable<Teacher> teachers ) =>
        new TeachersResponseDto() { Teachers = teachers.Select( Map ).ToList() };
}