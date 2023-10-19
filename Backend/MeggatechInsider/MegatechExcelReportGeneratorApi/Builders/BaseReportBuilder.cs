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

        // TODO Подумать, как прокидывать модели.
        // Либо заиспользовать один интерфейс, либо метод для установки состояния билдера, либо произвольные параметры (без абстрактного метода)
        public abstract BaseReportBuilder Build();

        public ReportData GetResult()
        {
            return new ReportData()
            {
                BytesData = DocumentHandler.GetDocumentBytes()
            };
        }
    }
}
