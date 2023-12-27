using Api.Models.EducationPlanCourses.Appointments;
using Api.Models.EducationPlanCourses.Courses;
using Api.Models.EducationPlanCourses.Difference;
using Api.Models.EducationPlanCourses.Plan;
using Api.Models.EducationPlanCourses.Teacher;
using Application.Abstractions.EducationalPlanCourses;
using Api.Mappers.EducationalPlanCourse;
using Microsoft.AspNetCore.Mvc;
using Domain.TeacherEntities;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/educational-plan-courses" )]
    public class EducationalPlanCoursesController : Controller
    {
        private readonly ITeacherCourseService _teacherCourseService;

        public EducationalPlanCoursesController( ITeacherCourseService teacherCourseService )
        {
            _teacherCourseService = teacherCourseService;
        }

        [HttpGet( "teachers" )]
        [ProducesResponseType<CourseTeacherListResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetTeachers( [FromQuery] CourseTeachersRequestDto teachersRequest )
        {
            if ( !IsValidYear( teachersRequest.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok( _teacherCourseService
                .GetTeachersCourseByYear( teachersRequest.Year )
                .Map() );
        }

        [HttpPut("teacher")]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult UpdateCourseTeacher( CourseTeacherUpdateListRequestDto teacherUpdateRequestDto )
        {
            if ( !IsValidYear( teacherUpdateRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            foreach (CourseTeacherUpdateRequestDto teacher in teacherUpdateRequestDto.Teachers )
            {
                _teacherCourseService.UpdateTeacherCourse(
                    teacher.Year,
                    teacher.Id,
                    teacher.Name,
                    teacher.WorkingContract,
                    teacher.WorkingStartDate,
                    teacher.WorkExperience,
                    teacher.WorkExperienceAtTheTimeOfTheEmployment,
                    teacher.BirthDay,
                    teacher.Age );
            }

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

            _teacherCourseService.UpdateTeacherCourse(
                    teacherCreateRequestDto.Year,
                    teacherCreateRequestDto.Id,
                    teacherCreateRequestDto.Name,
                    teacherCreateRequestDto.WorkingContract,
                    teacherCreateRequestDto.WorkingStartDate,
                    teacherCreateRequestDto.WorkExperience,
                    teacherCreateRequestDto.WorkExperienceAtTheTimeOfTheEmployment,
                    teacherCreateRequestDto.BirthDay,
                    teacherCreateRequestDto.Age );

            return Ok();
        }

        [HttpDelete( "teacher" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult DeleteTeacher( CourseTeacherDeleteRequestDto courseTeacherDeleteRequestDto )
        {

            if(_teacherCourseService.GetTeacherCourseById( courseTeacherDeleteRequestDto.Id ) is not null )
            {
                _teacherCourseService.DeleteTeacherCourse( courseTeacherDeleteRequestDto.Id );
            }

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

        [HttpGet( "plan" )]
        [ProducesResponseType<EducationalPlanCoursesResponseDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetEducationalPlanCourses( [FromQuery] EducationalPlanCoursesRequestDto planCoursesRequestDto )
        {
            if ( !IsValidYear( planCoursesRequestDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( !IsValidCourse( planCoursesRequestDto.CourseType ) )
            {
                return NotFound( "Не найдено такого курса" );
            }

            return Ok( new EducationalPlanCoursesResponseDto
            {
                Subjects = new List<EducationalPlanCoursesDto>
                {
                    new EducationalPlanCoursesDto
                    {
                        Id = 1,
                        Name = "Физика",
                        Type = "Обязательный профильный",
                        GroupsCount = 1,
                        HoursTotal = 30,
                        HoursAwaited = 20,
                        HoursPlanned = 25,
                        WeeksPlan = new List<int> { 5, 5, 5, 5, 5, 5 }
                    },
                    new EducationalPlanCoursesDto
                    {
                        Id = 1,
                        Name = "Математика",
                        Type = "Обязательный профильный",
                        GroupsCount = 1,
                        HoursTotal = 30,
                        HoursAwaited = 20,
                        HoursPlanned = 25,
                        WeeksPlan = new List<int> { 5, 5, 5, 5, 5, 5 }
                    },
                    new EducationalPlanCoursesDto
                    {
                        Id = 1,
                        Name = "Философия",
                        Type = "Обязательный профильный",
                        GroupsCount = 1,
                        HoursTotal = 30,
                        HoursAwaited = 20,
                        HoursPlanned = 25,
                        WeeksPlan = new List<int> { 5, 5, 5, 5, 5, 5 }
                    },
                },
                WeekStartDates = new List<string>
                {
                    "21.01.2023",
                    "28.01.2023",
                    "05.02.2023",
                    "12.02.2023",
                    "19.02.2023",
                    "26.02.2023"
                }
            } );
        }

        [HttpPut( "plan" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult UpdateEducationalPlanCourses( [FromBody] UpdateEducationalPlanCoursesRequestDto planCoursesDto )
        {
            if ( !IsValidYear( planCoursesDto.Year ) )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( !IsValidCourse( planCoursesDto.CourseType ) )
            {
                return NotFound( "Не найдено такого курса" );
            }

            //проверяем существование предмета
            int subjectId = 0;
            if ( subjectId == 1 )
            {
                return NotFound( "Не найдено такого предмета" );
            }

            return Ok();
        }

        private bool IsValidYear( int year )
        {
            // TODO Определить границы лет
            return true;
        }

        private bool IsValidCourse( string course )
        {
            return true;
        }
    }
}
