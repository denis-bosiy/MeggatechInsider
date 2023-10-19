namespace MegatechExcelReportGeneratorApi.Data
{
    public class ReportData
    {
        public string ContentType => "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet";
        public byte[] BytesData { get; set; }
    }
}
