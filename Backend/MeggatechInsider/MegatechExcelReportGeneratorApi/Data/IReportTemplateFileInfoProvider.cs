namespace MegatechExcelReportGeneratorApi.Data
{
    public interface IReportTemplateFileInfoProvider
    {
        FileInfo Get( ReportTemplateType reportTemplateType );
    }
}