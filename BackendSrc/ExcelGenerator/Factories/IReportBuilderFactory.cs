using ExcelGenerator.Builders;

namespace ExcelGenerator.Factories
{
    public interface IReportBuilderFactory
    {
        YearActualAcademicHoursReportBuilder GetYearActualAcademicHoursReportBuilder();
    }
}