using ExcelGenerator.Data;
using ExcelGenerator.Generators;

namespace ExcelGenerator.Factories;

public interface IActualAcademicHoursReportGeneratorFactory
{
    IActualAcademicHoursReportGenerator Create( ReportTemplateType reportTemplateType );
}