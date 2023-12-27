using Api.Mappers.SubdeanReport.MonthSubdeanReport;
using Api.Models.SubdeanReport;
using Application.Abstractions.SubdeanReportServices;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class SubdeanReportController : ControllerBase
    {
        private readonly IMonthReportService _monthReportService;
        private readonly IContractTypeRepository _contractTypeRepository;

        public SubdeanReportController( 
            IMonthReportService monthReportService, 
            IContractTypeRepository contractTypeRepository )
        {
            _monthReportService = monthReportService;
            _contractTypeRepository = contractTypeRepository;
        }

        [HttpGet( "month-report" )]
        [ProducesResponseType<SubdeanMonthReportResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetMonthReport( [FromQuery] int year, [FromQuery] int month, [FromQuery] string type )
        {
            if ( year < 2022 || year > DateTime.Now.Year + 1 )
            {
                return NotFound();
            }

            return Ok( _monthReportService
                .GenerateMonthReport( year, month, 
                _contractTypeRepository.GetAll().Where( t => t.ContractTypeName == type ).First() ).MapToDto() ); 
        }
    }
}
