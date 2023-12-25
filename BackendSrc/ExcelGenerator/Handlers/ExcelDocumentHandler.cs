using System.ComponentModel;

namespace ExcelGenerator.Handlers
{
    internal sealed class ExcelDocumentHandler : IExcelDocumentHandler
    {
        private readonly ExcelPackage _document;

        public ExcelDocumentHandler()
        {
            _document = new ExcelPackage();
        }

        public ExcelDocumentHandler( FileInfo template )
        {
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
            _document = new ExcelPackage( template, true );
        }

        public ExcelWorksheet CreateWorksheet( string worksheetName )
        {
            return _document.Workbook.Worksheets.Add( worksheetName );
        }

        public ExcelWorksheet GetWorksheet( int worksheetIndex )
        {
            return _document.Workbook.Worksheets[ worksheetIndex ];
        }

        public IEnumerable<ExcelWorksheet> GetWorksheets()
        {
            return _document.Workbook.Worksheets;
        }

        public byte[] GetDocumentBytes()
        {
            return _document.GetAsByteArray();
        }
    }
}
