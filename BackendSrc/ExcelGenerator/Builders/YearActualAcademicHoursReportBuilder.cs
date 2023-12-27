using ExcelGenerator.Data;
using ExcelGenerator.Handlers;
using OfficeOpenXml;

namespace ExcelGenerator.Builders
{
    public sealed class YearActualAcademicHoursReportBuilder : BaseReportBuilder
    {
        private readonly List<int> _templateWorksheetsIndexes;

        public YearActualAcademicHoursReportBuilder( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
            : this( new ExcelDocumentHandler( reportTemplateFileInfoProvider.GetTemplateFileInfo( ReportTemplateType.YearActualAcademicHoursReportTemplate ) ) )
        {
        }

        public YearActualAcademicHoursReportBuilder( IExcelDocumentHandler documentHandler )
            : base( documentHandler )
        {
            _templateWorksheetsIndexes = new List<int>();
        }

        public override YearActualAcademicHoursReportBuilder Build()
        {
            BuildFirstWorksheet( DocumentHandler.GetWorksheet( _templateWorksheetsIndexes[ 0 ] ) );

            return this;
        }

        private void BuildFirstWorksheet( ExcelWorksheet worksheet )
        {
            // Заполнение ячеек первого листа
        }
    }
}
