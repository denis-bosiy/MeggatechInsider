using Application.Models.ActualAcademicHours;
using Domain.TeacherEntities;

namespace Application.Abstractions.SubdeanReportServices
{
    public interface IYearReportService
    {
        YearActualAcademicHoursReport GenerateYearReport( int year, ContractType contractType );
    }
}
