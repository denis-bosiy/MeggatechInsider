using MegatechExcelReportGenerator.Handlers;
using MegatechExcelReportGeneratorApi.Data;

namespace MegatechExcelReportGeneratorApi.Builders
{
    public abstract class BaseReportBuilder
    {
        protected IExcelDocumentHandler DocumentHandler { get; }

        protected BaseReportBuilder( IExcelDocumentHandler documentHandler )
        {
            DocumentHandler = documentHandler;
        }

        public abstract BaseReportBuilder Build();

        public ReportResult GetResult()
        {
            return new ReportResult()
            {
                BytesData = DocumentHandler.GetDocumentBytes()
            };
        }
    }
}
