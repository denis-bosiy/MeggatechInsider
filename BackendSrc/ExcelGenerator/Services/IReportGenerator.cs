using ExcelGenerator.Data;

namespace ExcelGenerator.Services
{
    public interface IReportGenerator
    {
        ReportResult GetFirstExcelReport();
    }
}