using System.Web.Http.Description;
using Api.Models.TeacherTimetable;
using Api.Models.Timetable;
using Application.Abstractions.TImetableServices;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/timetable" )]
public class TimetableController : ControllerBase
{
    private readonly ITeacherTimetableService _teacherTimetableService;

    public TimetableController( ITeacherTimetableService teacherTimetableService )
    {
        _teacherTimetableService = teacherTimetableService;
    }

    [HttpGet]
    [ResponseType( typeof( TimetableResponseDto ) )]
    public IActionResult SearchTimetable( [FromQuery] TimetableRequestDto timetableRequestDto )
    {
        // mock
        // получаем каким-либо образом отфильтрованные по дате предметы

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        if ( false )
        {
            return NotFound( "Не найдено такой недели" );
        }

        List<CellDto> cells = new List<CellDto>
        {
            new CellDto
            {
                CellId = 1,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 8, 0, 0 ),
                EndTime = new TimeOnly( 9, 30, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 1 } },
                NumberOfGroup = 2,
                CurrentGroup = 1,
                Subject =
                    new SubjectDto { SubjectId = 1, TeacherName = "Павел Ермаков", SubjectName = "Обществознание" },
                Classroom = 402,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 2,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 9, 50, 0 ),
                EndTime = new TimeOnly( 11, 20, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new SubjectDto { SubjectId = 302, TeacherName = "Аристотель", SubjectName = "Физика" },
                Classroom = 404,
                IsOnline = false,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 3,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 11, 40, 0 ),
                EndTime = new TimeOnly( 13, 10, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new SubjectDto { SubjectId = 303, TeacherName = "Птолемей", SubjectName = "Геометрия" },
                Classroom = 500,
                IsOnline = false,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 4,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 13, 20, 0 ),
                EndTime = new TimeOnly( 14, 50, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new SubjectDto { SubjectId = 304, TeacherName = "Плутарх", SubjectName = "Философия" },
                Classroom = 404,
                IsOnline = false,
                IsParallel = true,
                IsClass = true,
                IsGroup = true
            },
            new CellDto
            {
                CellId = 5,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 8, 0, 0 ),
                EndTime = new TimeOnly( 9, 30, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 2 } },
                NumberOfGroup = 3,
                CurrentGroup = 2,
                Subject =
                    new SubjectDto
                    {
                        SubjectId = 13,
                        TeacherName = "Хабибрахманова А.З.",
                        SubjectName = "Трудности освоения русского языка"
                    },
                Classroom = 403,
                IsOnline = false,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 6,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 9, 50, 0 ),
                EndTime = new TimeOnly( 11, 20, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 2 } },
                NumberOfGroup = 2,
                CurrentGroup = 2,
                Subject = new SubjectDto { SubjectId = 14, TeacherName = "Охотников С.А.", SubjectName = "АиП" },
                Classroom = 405,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 7,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 11, 40, 0 ),
                EndTime = new TimeOnly( 13, 10, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 2 } },
                NumberOfGroup = 3,
                CurrentGroup = 2,
                Subject =
                    new SubjectDto
                    {
                        SubjectId = 15, TeacherName = "Гусарова Л.Г.", SubjectName = "Теор. вер. и статистика"
                    },
                Classroom = 406,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new CellDto
            {
                CellId = 8,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 13, 20, 0 ),
                EndTime = new TimeOnly( 14, 50, 0 ),
                Class = new List<ShortClassInfoDto> { new ShortClassInfoDto { ClassId = 16 } },
                NumberOfGroup = 2,
                CurrentGroup = 3,
                Subject =
                    new SubjectDto
                    {
                        SubjectId = 16, TeacherName = "Старикова Т.Л.", SubjectName = "Родной (русский) язык"
                    },
                Classroom = 407,
                IsOnline = true,
                IsParallel = true,
                IsClass = true,
                IsGroup = false
            },
        };

        SchoolMeetingDto schoolMeetingDto = new SchoolMeetingDto
        {
            Text = "Общелицейская линейка",
            WeekDay = DayOfWeek.Wednesday,
            StartTime = new TimeOnly( 8, 0, 0 ),
            EndTime = new TimeOnly( 8, 20, 0 )
        };

        TimetableResponseDto timetableResponse = new TimetableResponseDto
        {
            Cells = cells, SchoolMeeting = schoolMeetingDto
        };

        return Ok( timetableResponse );
    }

    [HttpPut]
    public IActionResult UpdateTimetable( [FromBody] TimetableUpdateRequestDto timetableUpdateRequestDto )
    {
        // mock

        int classIdNotFound = 1;
        if ( false )
        {
            return BadRequest( $"Class id {classIdNotFound} wasn't found" );
        }

        return Ok();
    }


    [HttpDelete( "cell" )]
    public IActionResult DeleteTimetableLesson(
        [FromBody] TimetableDeleteLessonRequestDto timetableDeleteLessonRequestDto )
    {
        // mock

        int classIdNotFound = 1;
        if ( false )
        {
            return BadRequest( $"Class id {classIdNotFound} wasn't found" );
        }

        return Ok();
    }

    [HttpPost( "apply" )]
    public IActionResult ApplyTimetable( [FromBody] TimetableApplyRequestDto timetableApplyRequestDto )
    {
        // mock

        if ( false )
        {
            return BadRequest( "Не найдено такого года" );
        }

        if ( false )
        {
            return BadRequest( "Не найдено такой недели" );
        }

        return Ok();
    }

    [HttpPost( "save-to-excel" )]
    public IActionResult SaveExcelFromTimetable( [FromBody] TimetableSaveExcelRequestDto timetableSaveExcelRequestDto )
    {
        // mock

        if ( false )
        {
            return BadRequest( "Не найдено такого года" );
        }

        if ( false )
        {
            return BadRequest( "Не найдено такой недели" );
        }

        return Ok();
    }

    [HttpPost( "save-to-report-card" )]
    public IActionResult SaveReportCardFromTimetable(
        [FromBody] TimetableSaveReportCardRequestDto timetableSaveReportCardRequestDto )
    {
        // mock

        if ( false )
        {
            return BadRequest( "Не найдено такого года" );
        }

        if ( false )
        {
            return BadRequest( "Не найдено такой недели" );
        }

        return Ok();
    }

    [HttpGet( "weeks" )]
    [ResponseType( typeof( TimetableWeeksResponseDto ) )]
    public IActionResult GetTimetableWeeks( [FromQuery] TimetableWeeksRequestDto timetableWeeksRequestDto )
    {
        // mock

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        TimetableWeeksResponseDto responseDto = new TimetableWeeksResponseDto
        {
            Weeks =
                new List<WeekInfoDto>() { new WeekInfoDto { Week = 1, Content = "Неделя 1 01.01.2023 - 07.01.2023" } },
        };

        return Ok( responseDto );
    }

    [HttpGet( "classes" )]
    [ResponseType( typeof( TimetableClassesResponseDto ) )]
    public IActionResult GetTimetableClasses( [FromQuery] TimetableClassesResponseDto timetableClassesResponseDto )
    {
        // mock

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        TimetableClassesResponseDto responseDto = new TimetableClassesResponseDto
        {
            Classes = new List<ClassInfoDto>()
            {
                new ClassInfoDto() { ClassId = 1, ClassName = "10-1" },
                new ClassInfoDto() { ClassId = 2, ClassName = "10-2" },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "subjects" )]
    [ResponseType( typeof( TimetableSubjectsResponseDto ) )]
    public IActionResult GetTimetableSubjects( [FromQuery] TimetableSubjectsRequestDto timetableSubjectsRequestDto )
    {
        // mock

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        if ( false )
        {
            return NotFound( "Не найдено такой недели" );
        }

        TimetableSubjectsResponseDto responseDto = new TimetableSubjectsResponseDto
        {
            Subjects = new List<SubjectInfoDto>()
            {
                new SubjectInfoDto() { SubjectId = 1, TeacherName = "Архимед", SubjectName = "Физика" },
                new SubjectInfoDto() { SubjectId = 2, TeacherName = "Плутарх", SubjectName = "Философия" },
                new SubjectInfoDto() { SubjectId = 3, TeacherName = "Ньютон", SubjectName = "Механика" },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "pair-time-ranges" )]
    [ResponseType( typeof( TimetablePairTimeRangesResponseDto ) )]
    public IActionResult GetTimetablePairTimeRanges(
        [FromQuery] TimetablePairTimeRangesRequestDto timetablePairTimeRangesRequestDto )
    {
        // mock

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        TimetablePairTimeRangesResponseDto responseDto = new TimetablePairTimeRangesResponseDto
        {
            PairTimeRanges = new List<PairTimeRangeDto>()
            {
                new PairTimeRangeDto()
                {
                    StartTime = new TimeOnly( 8, 0, 0 ), EndTime = new TimeOnly( 9, 50, 0 ), Id = 1
                },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "lesson-time-ranges" )]
    [ResponseType( typeof( TimetableLessonTimeRangesResponseDto ) )]
    public IActionResult GetTimetableLessonTimeRanges(
        [FromQuery] TimetableLessonTimeRangesRequestDto timetableLessonTimeRangesRequestDto )
    {
        // mock

        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        TimetableLessonTimeRangesResponseDto responseDto = new TimetableLessonTimeRangesResponseDto
        {
            LessonTimeRanges = new List<LessonTimeRangeDto>()
            {
                new LessonTimeRangeDto()
                {
                    StartTime = new TimeOnly( 8, 0, 0 ), EndTime = new TimeOnly( 8, 40, 0 ), Id = 1
                },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "teachers" )]
    [ResponseType( typeof( TeacherTimetableListResponseDto ) )]
    public IActionResult GetTeachers( [FromQuery] TeacherTimetableListRequestDto teacherTimetableRequest )
    {
        List<TeacherTimetable> teacherTimetableList =
            _teacherTimetableService.GetTeacherTimetableByYearAndWeek( teacherTimetableRequest.Year,
                teacherTimetableRequest.Week );

        return Ok( new TeacherTimetableListResponseDto()
        {
            Teachers = new List<TeacherTimetableDto>
            {
                new TeacherTimetableDto()
                {
                    Id = 1,
                    SubjectName = "Физика",
                    SubjectId = 1,
                    TeacherName = "Prozorov Maxim Andreevich",
                    TeacherId = 1,
                    AvailableHours = new List<AvailableHoursDto>()
                    {
                        new AvailableHoursDto()
                        {
                            Id = 1,
                            WeekDay = DayOfWeek.Sunday,
                            StartTime = new TimeOnly(09, 00),
                            EndTime = new TimeOnly(09, 45)
                        },
                        new AvailableHoursDto()
                        {
                            Id = 2,
                            WeekDay = DayOfWeek.Sunday,
                            StartTime = new TimeOnly(10, 00),
                            EndTime = new TimeOnly(10, 45)
                        },
                        new AvailableHoursDto()
                        {
                            Id = 3,
                            WeekDay = DayOfWeek.Sunday,
                            StartTime = new TimeOnly(11, 00),
                            EndTime = new TimeOnly(11, 45)
                        }
                    },
                    DistributedHoursToPlan = 10,
                    HoursToPlan = 11,
                    CreditHours = 12,
                    WorkedOverPlan = 13
                }
            }
        } );
    }

    [HttpPatch( "set-hours" )]
    public IActionResult SetAvailableHours( [FromBody] TeacherTimetableSaveRequestDto teacherTimetableRequest )
    {
        // mock
        // Вызываем сервис для сохранения изменений
        return Ok();
    }

    [HttpGet( "available-hours" )]
    [ResponseType( typeof( AvailableHoursResponseListDto ) )]
    public IActionResult GetAvailableHours()
    {
        // mock
        // Вызываем сервис для получения времени
        return Ok( new AvailableHoursResponseListDto()
        {
            AvailableHours = new List<AvailableHoursDto>()
            {
                new AvailableHoursDto()
                {
                    Id = 1,
                    WeekDay = DayOfWeek.Sunday,
                    StartTime = new TimeOnly(09, 00),
                    EndTime = new TimeOnly(09, 45)
                },
                new AvailableHoursDto()
                {
                    Id = 2,
                    WeekDay = DayOfWeek.Sunday,
                    StartTime = new TimeOnly(10, 00),
                    EndTime = new TimeOnly(10, 45)
                },
                new AvailableHoursDto()
                {
                    Id = 3,
                    WeekDay = DayOfWeek.Sunday,
                    StartTime = new TimeOnly(11, 00),
                    EndTime = new TimeOnly(11, 45)
                }
            },
        } ); 
    }
}