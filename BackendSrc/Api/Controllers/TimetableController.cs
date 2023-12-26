using System.Web.Http.Description;
using Api.Builders.Timetable.TeacherTimetableDtoBuilder;
using Api.Builders.Timetable.TimetableDtoBuilders;
using Api.Models.TeacherTimetable;
using Api.Models.Timetable;
using Application.Abstractions.EductionalPlan;
using Application.Abstractions.StudyingActivityServices;
using Application.Abstractions.TimetableServices;
using Domain.AssignmentEntities;
using Domain.TimetableEntities.GuidebookEntities;
using Domain.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/timetable" )]
public class TimetableController : ControllerBase
{
    private readonly ITeacherTimetableService _teacherTimetableService;
    private readonly ITimetableService _timetableService;
    private readonly IAssignmentService _assignmentService;
    private readonly ILessonTimeService _lessonTimeService;
    private readonly IPairTimeService _pairTimeService;
    private readonly ITeacherTimetableDtoBuilder _teacherTimetableDtoBuilder;
    private readonly ITimetableDtoBuilder _timetableDtoBuilder;

    public TimetableController(
        ITeacherTimetableService teacherTimetableService,
        ITimetableService timetableService,
        IAssignmentService assignmentService,
        ILessonTimeService lessonTimeService,
        IPairTimeService pairTimeService,
        ITeacherTimetableDtoBuilder teacherTimetableDtoBuilder,
        ITimetableDtoBuilder timetableDtoBuilder )
    {
        _teacherTimetableService = teacherTimetableService;
        _timetableService = timetableService;
        _assignmentService = assignmentService;
        _lessonTimeService = lessonTimeService;
        _pairTimeService = pairTimeService;
        _teacherTimetableDtoBuilder = teacherTimetableDtoBuilder;
        _timetableDtoBuilder = timetableDtoBuilder;
    }

    [HttpGet]
    [ResponseType( typeof( TimetableResponseDto ) )]
    public IActionResult SearchTimetable( [FromQuery] TimetableRequestDto timetableRequestDto )
    {
        if ( !IsValidYear( timetableRequestDto.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        List<Lesson> lessons = _timetableService.GetLessonsByDate( timetableRequestDto.Year, timetableRequestDto.Week );

        _timetableDtoBuilder.SetCells( lessons.Where( l => l.LessonType != LessonType.Parade ).ToList() );
        _timetableDtoBuilder.SetSchoolMeeting( lessons.Where( l => l.LessonType == LessonType.Parade ).First() );

        return Ok( _timetableDtoBuilder.GetResult() );
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
    [ProducesResponseType( typeof( TeacherTimetableListResponseDto ), StatusCodes.Status200OK )]
    public IActionResult GetTeachers( [FromQuery] TeacherTimetableListRequestDto teacherTimetableRequest )
    {
        List<Assignment> assignments = _assignmentService.GetAssignmentsByYear( teacherTimetableRequest.Year );

        DateOnly weekStartDate =
            _teacherTimetableService.GetWeekStartDate( teacherTimetableRequest.Year, teacherTimetableRequest.Week );

        List<TeacherAvailableHours> teachersAvailableHours =
            _teacherTimetableService.GetAvailableHoursByWeekStartDate( weekStartDate );

        List<TeacherTimetableDto> teacherTimetableDto = assignments.Select( assignment =>
        {
            List<TeacherAvailableHours> assignmentTeacherAvailableHours = teachersAvailableHours
                .Where( t => t.TeacherId == assignment.TeacherId )
                .Where( t => t.WeekStartDate == weekStartDate )
                .ToList();

            _teacherTimetableDtoBuilder.SetAssignment( assignment );
            _teacherTimetableDtoBuilder.SetAvailableHoursByWeekDay( assignmentTeacherAvailableHours );

            return _teacherTimetableDtoBuilder.GetResult();
        } ).ToList();

        TeacherTimetableListResponseDto responseDto = new TeacherTimetableListResponseDto()
        {
            TeachersTimetables = teacherTimetableDto
        };

        return Ok( responseDto );
    }

    [HttpPatch( "set-available-hours" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    public IActionResult SetAvailableHours( [FromBody] TeacherTimetableSaveRequestDto teacherTimetableRequest )
    {
        if ( !_teacherTimetableService.IsValidYear( teacherTimetableRequest.Year ) )
        {
            return BadRequest( "Не найдено такого года" );
        }

        if ( !_teacherTimetableService.IsValidWeek( teacherTimetableRequest.Week ) )
        {
            return BadRequest( "Не найдено такой недели" );
        }

        DateOnly weekStartDate =
            _teacherTimetableService.GetWeekStartDate( teacherTimetableRequest.Year, teacherTimetableRequest.Week );

        TeacherAvailableHours? teacherAvailableHours =
            _teacherTimetableService.GetAvailableHoursByWeekStartDate( weekStartDate )
                .FirstOrDefault( t => t.TeacherId == teacherTimetableRequest.TeacherId );
        if ( teacherAvailableHours is null )
        {
            foreach ( AvailableHoursByWeekDayDto availableHoursByWeekDay in
                     teacherTimetableRequest.AvailableHoursByWeekDay )
            {
                List<LessonTime> lessonTimes =
                    availableHoursByWeekDay.AvailableLessonTimesIds.Select( t => _lessonTimeService.GetById( t ) )
                        .ToList();
                List<PairTime> pairTimes =
                    availableHoursByWeekDay.AvailablePairTimesIds.Select( t => _pairTimeService.GetById( t ) ).ToList();

                _teacherTimetableService.CreateTeacherAvailableHours( teacherTimetableRequest.TeacherId,
                    availableHoursByWeekDay.WeekDay, pairTimes, lessonTimes, weekStartDate );
            }
        }
        else
        {
            foreach ( AvailableHoursByWeekDayDto availableHoursByWeekDay in
                     teacherTimetableRequest.AvailableHoursByWeekDay )
            {
                List<LessonTime> lessonTimes =
                    availableHoursByWeekDay.AvailableLessonTimesIds.Select( t => _lessonTimeService.GetById( t ) )
                        .ToList();
                List<PairTime> pairTimes =
                    availableHoursByWeekDay.AvailablePairTimesIds.Select( t => _pairTimeService.GetById( t ) ).ToList();

                _teacherTimetableService.UpdateTeacherAvailableHours( teacherAvailableHours.Id,
                    teacherTimetableRequest.TeacherId, availableHoursByWeekDay.WeekDay, pairTimes, lessonTimes,
                    weekStartDate );
            }
        }

        return Ok();
    }

    private bool IsValidYear( int year )
    {
        return ( year >= 2022 ) && ( year <= DateTime.UtcNow.Year + 1 );
    }
}