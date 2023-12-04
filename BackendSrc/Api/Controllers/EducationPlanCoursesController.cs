using Api.Models.EducationPlanCourses.Appointments;
using Api.Models.EducationPlanCourses.Courses;
using Api.Models.EducationPlanCourses.Difference;
using Api.Models.EducationPlanCourses.Teacher;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/educational-plan-courses" )]
    public class EducationPlanCoursesController : Controller
    {
        [HttpGet( "teachers" )]
        [ProducesResponseType<CourseTeacherListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetTeachers( [FromQuery] CourseTeachersRequestDto teachersRequest )
        {
            if ( !IsValidYear( teachersRequest.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new CourseTeacherListResponseDto()
            {
                //При написании сервисов дату преобразовывать в iso-формат
                Teachers = new List<CourseTeacherDto>
                {
                    new CourseTeacherDto
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
                    new CourseTeacherDto
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
                    new CourseTeacherDto
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
        public IActionResult UpdateCourseTeacher(CourseTeacherUpdateRequestDto teacherUpdateRequestDto)
        {
            if ( !IsValidYear( teacherUpdateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //обновление данных преподавателя

            return Ok();
        }

        [HttpPost( "teacher" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateTeacher( CourseTeacherCreateRequestDto teacherCreateRequestDto )
        {
            if ( !IsValidYear( teacherCreateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //создание данных преподавателя

            return Ok();
        }

        [HttpDelete( "teacher" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteTeacher( CourseTeacherDeleteRequestDto courseTeacherDeleteRequestDto )
        {

            //Удаление данных преподавателя по id

            return Ok() ;
        }

        [HttpGet( "courses" )]
        [ProducesResponseType<CoursesListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetCourses( [FromQuery] CoursesRequestDto coursesRequestDto )
        {
            if ( !IsValidYear( coursesRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new CoursesListResponseDto 
            {
                Courses = new List<CourseDto> {
                    new CourseDto()
                    {
                        Id = 1,
                        Name = "Математика",
                        Type = "шюп",
                        HoursByPlan = 40,
                        NumberOfGroups = 3
                    },
                    new CourseDto()
                    {
                        Id = 2,
                        Name = "Физика",
                        Type = "подготовительные-экспресс",
                        HoursByPlan = 30,
                        NumberOfGroups = 2
                    },
                    new CourseDto()
                    {
                        Id = 3,
                        Name = "Информатика",
                        Type = "шюп",
                        HoursByPlan = 60,
                        NumberOfGroups = 4
                    }
                }
            } );
        }

        [HttpPut( "courses" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult UpdateTeacher( CoursesUpdateRequestDto coursesUpdateRequestDto )
        {
            if ( !IsValidYear( coursesUpdateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //обновление данных преподавателя

            return Ok();
        }

        [HttpPost( "courses" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateCourse( CoursesCreateRequestDto coursesCreateRequestDto )
        {
            if ( !IsValidYear( coursesCreateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //создание данных преподавателя

            return Ok();
        }

        [HttpDelete( "courses" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteCourse( CoursesDeleteRequestDto coursesDeleteRequestDto )
        {

            //Удаление данных преподавателя по id

            return Ok() ;
        }

        [HttpGet( "appointments" )]
        [ProducesResponseType<AppointmentListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetAppointments( [FromQuery] AppointmentRequestDto appointmentRequestDto )
        {
            if ( !IsValidYear( appointmentRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok(
                new AppointmentListResponseDto()
                {
                    Appointments = new List<AppointmentDto>
                    {
                        new AppointmentDto()
                        {
                            Id = 1,
                            Name = "JavaScript",
                            Teacher = "Прозоров Максим Андреевич",
                            GroupCount = 1,
                            HoursOnWeek = 1,
                            HoursOnYear = 1,
                            CostPerHour = 4,
                        },
                        new AppointmentDto()
                        {
                            Id = 2,
                            Name = "Физика",
                            Teacher = "Чулков Петр Сергеевич",
                            GroupCount = 3,
                            HoursOnWeek = 8,
                            HoursOnYear = 40,
                            CostPerHour = 3,
                        },
                        new AppointmentDto()
                        {
                            Id = 3,
                            Name = "История",
                            Teacher = "Добельман Генрих Жицкий",
                            GroupCount = 4,
                            HoursOnWeek = 10,
                            HoursOnYear = 50,
                            CostPerHour = 2,
                        },
                    }
                }
             );
        }

        [HttpPut( "appointments" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult UpdateAppointments( UpdateAppointmentsRequestDto updateAppointmentsRequestDto )
        {
            if ( !IsValidYear( updateAppointmentsRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //обновление данных назначений

            return Ok();
        }

        [HttpPost( "appointments" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult CreateAppointments( CreateAppointmentRequestDto createAppointmentRequestDto )
        {
            if ( !IsValidYear( createAppointmentRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            //создание данных назначений

            return Ok();
        }

        [HttpDelete( "appointments" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteAppointments( DeleteAppointmentRequestDto deleteAppointmentRequestDto )
        {

            //Удаление данных назначения по id

            return Ok() ;
        }

        [HttpGet( "differences" )]
        [ProducesResponseType<DifferenceCourseListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetDifferences( [FromQuery] DifferenceCourseRequestDto differenceCoursesRequestDto )
        {
            if ( !IsValidYear( differenceCoursesRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( new DifferenceCourseListResponseDto 
            { 
                Differences = new List<DifferenceCourseDto>
                {
                    new DifferenceCourseDto
                    {
                        Id = 1,
                        Name = "История",
                        GroupCount = 1,
                        GroupCountByPlan = 1,
                    },
                    new DifferenceCourseDto
                    {
                        Id = 2,
                        Name = "Math",
                        GroupCount = 2,
                        GroupCountByPlan = 2,
                    },
                    new DifferenceCourseDto
                    {
                        Id = 3,
                        Name = "Russian Language",
                        GroupCount = 3,
                        GroupCountByPlan = 3,
                    },
                }
            } );
        }

        private bool IsValidYear( int year )
        {
            // TODO Определить границы лет
            return true;
        }
    }
}
