using MegatechExcelReportGeneratorApi.Builders;

namespace MegatechExcelReportGeneratorApi.Factories
{
    public interface IReportBuilderFactory
    {
        FirstReportBuilder GetFirstReportBuilder();
    }
}