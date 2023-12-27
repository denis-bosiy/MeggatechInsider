using ExcelGenerator.Data;
using ExcelGenerator.Generators;

namespace ExcelGenerator.Factories;

public class ActualAcademicHoursReportGeneratorFactory : IActualAcademicHoursReportGeneratorFactory
{
    public IActualAcademicHoursReportGenerator Create( ReportTemplateType reportTemplateType ) =>
        throw new NotImplementedException();
}