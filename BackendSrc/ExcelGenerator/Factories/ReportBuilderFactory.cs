using ExcelGenerator.Builders;
using ExcelGenerator.Data;

namespace ExcelGenerator.Factories
{
    public sealed class ReportBuilderFactory : IReportBuilderFactory
    {
        private readonly IReportTemplateFileInfoProvider _reportTemplateFileInfoProvider;

        public ReportBuilderFactory( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
        {
            _reportTemplateFileInfoProvider = reportTemplateFileInfoProvider;
        }

        public FirstReportBuilder GetFirstReportBuilder()
        {
            return new FirstReportBuilder( _reportTemplateFileInfoProvider );
        }
    }
}
