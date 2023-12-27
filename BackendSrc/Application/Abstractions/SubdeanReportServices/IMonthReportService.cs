using Application.Models.ActualAcademicHours;
using Domain.TeacherEntities;

namespace Application.Abstractions.SubdeanReportServices
{
    public interface IMonthReportService
    {
        MonthActualAcademicHoursReport GenerateMonthReport( int year, int month, ContractType contractType );
    }
}
