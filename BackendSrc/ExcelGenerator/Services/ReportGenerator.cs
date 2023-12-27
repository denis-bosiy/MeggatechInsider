using ExcelGenerator.Builders;
using ExcelGenerator.Data;
using ExcelGenerator.Factories;

namespace ExcelGenerator.Services
{
    public sealed class ReportGenerator : IReportGenerator
    {
        private readonly IReportBuilderFactory _reportBuilderFactory;

        public ReportGenerator( IReportBuilderFactory reportBuilderFactory )
        {
            _reportBuilderFactory = reportBuilderFactory;
        }

        // Параметры фильтрации и поиска напрямую аргументами метода генерации, затем в Build()
        public ReportResult GetFirstExcelReport()
        {
            // Call some DataPreparingService
            //

            // Данные через конструктор билдера (будут в приватном поле)
            YearActualAcademicHoursReportBuilder yearActualAcademicHoursReportBuilder = _reportBuilderFactory.GetYearActualAcademicHoursReportBuilder();

            return yearActualAcademicHoursReportBuilder
                .Build()
                .GetResult();
        }
    }
}
