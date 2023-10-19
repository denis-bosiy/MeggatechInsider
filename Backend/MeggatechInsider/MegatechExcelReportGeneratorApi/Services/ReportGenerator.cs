using MegatechExcelReportGeneratorApi.Builders;
using MegatechExcelReportGeneratorApi.Data;

namespace MegatechExcelReportGeneratorApi.Services
{
    // Параметры фильтрации и поиска напрямую аргументами метода генерации
    public sealed class ReportGenerator : IReportGenerator
    {
        private readonly IReportTemplateFileInfoProvider _reportTemplateFileInfoProvider;

        public ReportGenerator( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
        {
            _reportTemplateFileInfoProvider = reportTemplateFileInfoProvider;
        }

        public ReportData GetFirstExcelReport()
        {
            // Call some DataPreparingService
            //

            
            FirstReportBuilder firstReportBuilder = new FirstReportBuilder( _reportTemplateFileInfoProvider );

            return firstReportBuilder
                .Build()
                .GetResult();
        }
    }
}
