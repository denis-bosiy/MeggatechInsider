using Api.Models.EducationalPlan.Teacher;
using Api.Models.EducationPlanCourses.Teacher;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Description;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/educational-plan-courses" )]
    public class EducationPlanCoursesController : Controller
    {
        [HttpGet( "teachers" )]
        [ProducesResponseType<TeachersResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetTeachers( [FromQuery] TeachersRequestDto teachersRequest )
        {
            if ( !IsValidYear( teachersRequest.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new TeacherListResponseDto()
            {
                //При написании сервисов дату преобразовывать в iso-формат
                Teachers = new List<TeacherDto>
                {
                    new TeacherDto
                    {
                        Id = 1,
                        Name = "Прозоров Максим Андреевич",
                        WorkingContract = "ГПХ",
                        WorkingStartDate = new DateOnly(2020, 01, 21),
                        WorkExperience = 2,
                        WorkExperienceAtTheTimeOfTheEmployment = 2,
                        BirthDay = new DateOnly(2002, 01, 21),
                        Age = 25
                    },
                    new TeacherDto
                    {
                        Id = 1,
                        Name = "Крыскин Петр Сергеевич",
                        WorkingContract = "ГПХ",
                        WorkingStartDate = new DateOnly(2019, 01, 21),
                        WorkExperience = 4,
                        WorkExperienceAtTheTimeOfTheEmployment = 1,
                        BirthDay = new DateOnly(2003, 02, 26),
                        Age = 45
                    },
                    new TeacherDto
                    {
                        Id = 1,
                        Name = "Добельманов Генрих Айратович",
                        WorkingContract = "ГПХ",
                        WorkingStartDate = new DateOnly(2022, 01, 21),
                        WorkExperience = 3,
                        WorkExperienceAtTheTimeOfTheEmployment = 2,
                        BirthDay = new DateOnly(1980, 01, 11),
                        Age = 30
                    }
                }
            });
        }

        [HttpPut("teacher")]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult UpdateTeacher(TeacherUpdateRequestDto teacherUpdateRequestDto)
        {
            if ( !IsValidYear( teacherUpdateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //обновление данных преподавателя

            return ( Ok() );
        }

        [HttpPost( "teacher" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateTeacher( TeacherCreateRequestDto teacherCreateRequestDto )
        {
            if ( !IsValidYear( teacherCreateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //создание данных преподавателя

            return ( Ok() );
        }

        private bool IsValidYear( int year )
        {
            // TODO Определить границы лет
            return true;
        }
    }
}
