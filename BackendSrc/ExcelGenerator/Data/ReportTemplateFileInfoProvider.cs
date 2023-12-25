using Microsoft.Extensions.Configuration;

namespace ExcelGenerator.Data
{
    public sealed class ReportTemplateFileInfoProvider : IReportTemplateFileInfoProvider
    {
        private readonly string _reportTemplatesDirectoryPath;

        private const string ReportTemplatesDirectoryPathConfSection = "ReportTemplatesDirectoryPath";

        public ReportTemplateFileInfoProvider( IConfiguration configuration )
        {
            _reportTemplatesDirectoryPath = configuration[ ReportTemplatesDirectoryPathConfSection ];
        }

        public FileInfo Get( ReportTemplateType reportTemplateType )
        {
            return new FileInfo( $"{_reportTemplatesDirectoryPath}/{reportTemplateType}.xlsx" );
        }
    }
}
