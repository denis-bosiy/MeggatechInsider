using Api.Models.EducationPlanCourses.Teacher;
using Api.Models.Settings.SalarySettings;
using Api.Models.Settings.TypesContracts;
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
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
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
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
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
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteSalarySettings( [FromBody] DeleteSalarySettingRequestDto deleteSalarySetting )
        {

            return Ok();
        }

        private bool IsValidYear( int year )
        {
            // TODO Определить границы лет
            return true;
        }

        [HttpGet( "types-contracts" )]
        [ProducesResponseType<TypesContractsListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetTypesContracts( [FromQuery] TypesContractsRequestDto contractsRequestDto )
        {
            if ( !IsValidYear( contractsRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new TypesContractsListResponseDto
            {
                TypesContracts = new List<TypeContractDto>
                {
                    new TypeContractDto
                    {
                        Id = 1,
                        Name = "ГПХ"
                    },
                    new TypeContractDto
                    {
                        Id = 1,
                        Name = "Основной"
                    },
                }
            } );
        }

        [HttpPost( "types-contracts" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateTypeContract( [FromBody] CreateTypeContractRequestDto contractRequestDto )
        {
            if ( !IsValidYear( contractRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpDelete( "types-contracts" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteTypeContract( [FromBody] DeleteTypeContractRequestDto contractRequestDto )
        {
            if ( !IsValidYear( contractRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( contractRequestDto.Id == null )
            {
                return NotFound( "Не найдено такого контракта" );
            }

            return Ok();
        }

        [HttpGet( "teacher-categories" )]
        [ProducesResponseType<TypesContractsListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetTeacherCategories( [FromQuery] TypesContractsRequestDto contractsRequestDto )
        {
            if ( !IsValidYear( contractsRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new TypesContractsListResponseDto
            {
                TypesContracts = new List<TypeContractDto>
                {
                    new TypeContractDto
                    {
                        Id = 1,
                        Name = "ГПХ"
                    },
                    new TypeContractDto
                    {
                        Id = 1,
                        Name = "Основной"
                    },
                }
            } );
        }

        [HttpPost( "teacher-categories" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateTeacherCategories( [FromBody] CreateTypeContractRequestDto contractRequestDto )
        {
            if ( !IsValidYear( contractRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpDelete( "teacher-categories" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteTeacherCategories( [FromBody] DeleteTypeContractRequestDto contractRequestDto )
        {
            if ( !IsValidYear( contractRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( contractRequestDto.Id == null )
            {
                return NotFound( "Не найдено такого контракта" );
            }

            return Ok();
        }
    }
}