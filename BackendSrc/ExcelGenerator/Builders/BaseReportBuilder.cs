using ExcelGenerator.Data;
using ExcelGenerator.Handlers;

namespace ExcelGenerator.Builders
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
