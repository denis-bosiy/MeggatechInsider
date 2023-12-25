namespace ExcelGenerator.Data
{
    public interface IReportTemplateFileInfoProvider
    {
        FileInfo Get( ReportTemplateType reportTemplateType );
    }
}