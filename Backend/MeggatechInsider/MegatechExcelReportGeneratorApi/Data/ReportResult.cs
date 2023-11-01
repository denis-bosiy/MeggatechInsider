namespace MegatechExcelReportGeneratorApi.Data
{
    public class ReportResult
    {
        public string ContentType => "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet";
        public byte[] BytesData { get; set; }
    }
}
