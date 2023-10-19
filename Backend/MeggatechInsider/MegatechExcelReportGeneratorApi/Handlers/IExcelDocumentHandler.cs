using OfficeOpenXml;

namespace MegatechExcelReportGenerator.Handlers
{
    public interface IExcelDocumentHandler
    {
        ExcelWorksheet CreateWorksheet( string worksheetName );
        ExcelWorksheet GetWorksheet( int worksheetIndex );
        byte[] GetDocumentBytes();
    }
}