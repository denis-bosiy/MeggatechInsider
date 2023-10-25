using MegatechExcelReportGeneratorApi.Data;
using MegatechExcelReportGeneratorApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MegatechExcelReportGeneratorApi.Controllers
{
    [ApiController]
    [Route( "report" )]
    public class ReportController : ControllerBase
    {
        private readonly IReportGenerator _reportGenerator;

        public ReportController( IReportGenerator reportGenerator )
        {
            _reportGenerator = reportGenerator;
        }

        [HttpGet( "first" )]
        public IActionResult GetFirstReport()
        {
            ReportResult result = _reportGenerator.GetFirstExcelReport();

            return File( result.BytesData, result.ContentType );
        }
    }
}