using Api.Models.Settings.SalarySettings;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/settings" )]
    public class SettingsController : ControllerBase
    {
        [HttpGet( "salaries" )]
        [ProducesResponseType<ListSalarySettingsResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetSalarySettings( [FromQuery] SalarySettingsRequestDto salarySettings )
        {
            // mock

            if ( !IsValidYear( salarySettings.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new ListSalarySettingsResponseDto
            {
                Salaries = new List<SalarySettingsDto>
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
                }
            } );
        }

        [HttpPut( "salaries" )]
        public IActionResult UpdateSalarySettings( [FromBody] UpdateSalariesSettingsRequestDto updateSalariesSettings )
        {
            // mock

            if ( !IsValidYear( updateSalariesSettings.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpPost( "salaries" )]
        public IActionResult CreateSalarySettings( [FromBody] CreateSalarySettingsRequestDto createSalarySettings )
        {
            // mock

            if ( !IsValidYear( createSalarySettings.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpDelete( "salaries" )]
        public IActionResult DeleteSalarySettings( [FromBody] DeleteSalarySettingRequestDto deleteSalarySetting )
        {

            return Ok();
        }

        private bool IsValidYear( int year )
        {
            // TODO Определить границы лет
            return true;
        }
    }
}