namespace ExcelGenerator.Handlers
{
    public interface IExcelDocumentHandler
    {
        ExcelWorksheet CreateWorksheet( string worksheetName );
        ExcelWorksheet GetWorksheet( int worksheetIndex );
        byte[] GetDocumentBytes();
        IEnumerable<ExcelWorksheet> GetWorksheets();
    }
}