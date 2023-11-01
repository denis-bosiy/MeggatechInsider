using MegatechExcelReportGeneratorApi.Builders;
using MegatechExcelReportGeneratorApi.Data;
using MegatechExcelReportGeneratorApi.Factories;

namespace MegatechExcelReportGeneratorApi.Services
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
            FirstReportBuilder firstReportBuilder = _reportBuilderFactory.GetFirstReportBuilder();

            return firstReportBuilder
                .Build()
                .GetResult();
        }
    }
}
