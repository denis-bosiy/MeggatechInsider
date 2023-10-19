using MegatechExcelReportGenerator.Handlers;
using MegatechExcelReportGeneratorApi.Data;
using OfficeOpenXml;

namespace MegatechExcelReportGeneratorApi.Builders
{
    public sealed class FirstReportBuilder : BaseReportBuilder
    {
        private readonly bool _templatedReport;

        // TODO Подумать над очисткой параметров при создании пользователем по этой схеме.
        // Либо Factory для провайдера, либо Factory для билдеров (скорее второе)
        public FirstReportBuilder( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
            : this( new ExcelDocumentHandler( reportTemplateFileInfoProvider.Get( ReportTemplateType.FirstReportTemplate ) ) )
        {
            _templatedReport = true;
        }

        public FirstReportBuilder( IExcelDocumentHandler documentHandler )
            : base( documentHandler )
        {
            _templatedReport = false;
        }

        public override FirstReportBuilder Build()
        {
            if ( _templatedReport )
            {
                BuildFirstWorksheet( DocumentHandler.GetWorksheet( 0 ) );
            }
            else
            {
                BuildFirstWorksheet( DocumentHandler.CreateWorksheet( "FirstWorksheet" ) );
            }

            return this;
        }

        private void BuildFirstWorksheet( ExcelWorksheet worksheet )
        {
            // Заполнение ячеек первого листа
        }
    }
}
