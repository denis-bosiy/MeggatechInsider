namespace ExcelGenerator.Data
{
    public interface IReportTemplateFileInfoProvider
    {
        FileInfo GetTemplateFileInfo( ReportTemplateType reportTemplateType );
        FileInfo GetOutputFileInfo( ReportTemplateType reportTemplateType );
    }
}