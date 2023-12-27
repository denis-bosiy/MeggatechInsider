namespace ExcelGenerator.Data
{
    public sealed class ReportTemplateFileInfoProvider : IReportTemplateFileInfoProvider
    {
        private readonly string _reportTemplatesDirectoryPath;
        private readonly string _reportOutputsDirectoryPath;

        private const string ReportTemplatesDirectoryPathConfSection = "ReportTemplatesDirectoryPath";
        private const string ReportOutputsDirectoryPathConfSection = "ReportOutputsDirectoryPath";

        // TODO: передавать в конструктор IConfiguration для получения путей файлов
        public ReportTemplateFileInfoProvider()
        {
            // TODO: получать путь из файла конфигурации и разобраться с этим путем в докер контейнере
            _reportTemplatesDirectoryPath = "Data";
            _reportOutputsDirectoryPath = Environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );
        }

        public FileInfo GetTemplateFileInfo( ReportTemplateType reportTemplateType )
        {
            return new FileInfo( $@"{_reportTemplatesDirectoryPath}\{reportTemplateType}.xlsx" );
        }

        public FileInfo GetOutputFileInfo( ReportTemplateType reportTemplateType )
        {
            return new FileInfo( $@"{_reportOutputsDirectoryPath}\{reportTemplateType}.xlsx" );
        }
    }
}
