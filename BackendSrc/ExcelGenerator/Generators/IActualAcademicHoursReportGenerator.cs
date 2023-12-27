using ExcelGenerator.Models;

namespace ExcelGenerator.Generators;

public interface IActualAcademicHoursReportGenerator
{
    byte[] GenerateYearActualAcademicHoursReport( YearActualAcademicHoursModel model );
    byte[] GenerateMonthActualAcademicHoursReport( MonthActualAcademicHoursModel model );
}