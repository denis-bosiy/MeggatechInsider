using MegatechExcelReportGenerator.Handlers;
using MegatechExcelReportGeneratorApi.Data;
using OfficeOpenXml;

namespace MegatechExcelReportGeneratorApi.Builders
{
    public sealed class FirstReportBuilder : BaseReportBuilder
    {
        private readonly bool _isTemplatedReport;
        private readonly List<int> _templateWorksheetsIndexes;

        public FirstReportBuilder( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
            : this( new ExcelDocumentHandler( reportTemplateFileInfoProvider.Get( ReportTemplateType.FirstReportTemplate ) ) )
        {
            _isTemplatedReport = true;
            // TODO Следить за их кол-вом, порядком
            _templateWorksheetsIndexes = DocumentHandler
                .GetWorksheets()
                .Select( x => x.Index )
                .ToList();
        }

        public FirstReportBuilder( IExcelDocumentHandler documentHandler )
            : base( documentHandler )
        {
            _isTemplatedReport = false;
            _templateWorksheetsIndexes = new List<int>();
        }

        public override FirstReportBuilder Build()
        {
            if ( _isTemplatedReport )
            {
                BuildFirstWorksheet( DocumentHandler.GetWorksheet( _templateWorksheetsIndexes[ 0 ] ) );
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
