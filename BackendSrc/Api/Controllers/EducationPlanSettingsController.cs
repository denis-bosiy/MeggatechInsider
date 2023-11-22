using Api.Models.EductionPlanSettings.PlanSettings;
using Api.Models.EductionPlanSettings.SalarySettings;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Description;



namespace Api.Controllers
{
    [ApiController]
    [Route( "api/education-plan-settings" )]
    public class EducationPlanSettingsController : ControllerBase
    {
        [HttpGet( "plan" )]
        [ResponseType( typeof( EducationPlanSettingsDto ) )]
        public IActionResult GetPlanSettings( [FromQuery] int year )
        {
            // mock

            if ( false )
            {
                return BadRequest( "Не найдено такого года" );
            }

            EducationPlanSettingsDto educationPlanSettingsDto = new()
            {
                NumberOf10Classes = 2,
                NumberOf11Classes = 2,
                NumberOfWeeksIn1Quarter = 8,
                StartOf1Quarter = "01.09",
                NumberOfWeeksIn2Quarter = 9,
                StartOf2Quarter = "05.11",
                NumberOfWeeksIn3Quarter = 10,
                StartOf3Quarter = "12.01",
                NumberOfWeeksIn4Quarter = 7,
                StartOf4Quarter = "14.04",
                NumberOfWeeks = 34
            };

            return Ok( educationPlanSettingsDto );
        }

        [HttpPut( "plan" )]
        public IActionResult PutPlanSettings( [FromBody] PutEducationPlanSettingsDto educationPlanSettingsDto )
        {
            // mock

            if ( false )
            {
                return BadRequest( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpGet( "salaries" )]
        [ResponseType( typeof( SalariesSettingsDto ) )]
        public IActionResult GetSalarySettings( [FromQuery] int year)
        {
            // mock

            if (false)
            {
                return BadRequest( "Не найдено такого года" );
            }

            List<SalarySettingsDto> salaries = new()
            {
                new SalarySettingsDto
                {
                    Id = 1,
                     Name = "Иван",
                    Coefficient = 2
                   
                },
                new SalarySettingsDto
                {
                    Id = 2,
                    Name = "Сергей",
                    Coefficient = 3
                    
                },
                new SalarySettingsDto
                {
                    Id = 3,
                    Name = "Магнус",
                    Coefficient = 4
                    
                }
            };

            return Ok( new SalariesSettingsDto() { Salaries = salaries} );
        }

        [HttpPut( "salaries" )]
        public IActionResult PutSalarySettings( [FromBody] PutSalariesSettingsDto putSalariesSettingsDto)
        {
            // mock

            if ( false )
            {
                return BadRequest("Не найдено такого года");
            }

            return Ok();
        }

        [HttpPost( "salaries" )]
        public IActionResult PostSalarySettings( [FromBody] PostSalarySettingsDto postSalarySettingsDto)
        {
            // mock

            if ( false )
            {
                return BadRequest( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpDelete( "salaries" )]
        public IActionResult DeleteSalarySettings( [FromQuery] int id)
        {
            if ( false )
            {
                return BadRequest( " какой-то переданный id-шник не найден" );
            }

            return Ok();
        }
    }


}


/*
   { "settings": [{
        "id": number,
        "name": string,
        "coefficient": number,
    }]
}

 */