using MegatechExcelReportGeneratorApi.Data;

namespace MegatechExcelReportGeneratorApi.Services
{
    public interface IReportGenerator
    {
        ReportResult GetFirstExcelReport();
    }
}