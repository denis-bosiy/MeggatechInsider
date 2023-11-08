using Api.Models.Timetable;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/timetable" )]
public class TimetableController : ControllerBase
{
    [HttpGet( "timetable" )]
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

        List<Cell> cells = new List<Cell>
        {
            new Cell
            {
                CellId = 1,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 8, 0, 0 ),
                EndTime = new TimeOnly( 9, 30, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 1 } },
                NumberOfGroup = 2,
                CurrentGroup = 1,
                Subject =
                    new Subject { SubjectId = 1, TeacherName = "Павел Ермаков", SubjectName = "Обществознание" },
                Classroom = 402,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new Cell
            {
                CellId = 2,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 9, 50, 0 ),
                EndTime = new TimeOnly( 11, 20, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new Subject { SubjectId = 302, TeacherName = "Аристотель", SubjectName = "Физика" },
                Classroom = 404,
                IsOnline = false,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new Cell
            {
                CellId = 3,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 11, 40, 0 ),
                EndTime = new TimeOnly( 13, 10, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new Subject { SubjectId = 303, TeacherName = "Птолемей", SubjectName = "Геометрия" },
                Classroom = 500,
                IsOnline = false,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new Cell
            {
                CellId = 4,
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( 13, 20, 0 ),
                EndTime = new TimeOnly( 14, 50, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 1 } },
                NumberOfGroup = 1,
                CurrentGroup = 1,
                Subject = new Subject { SubjectId = 304, TeacherName = "Плутарх", SubjectName = "Философия" },
                Classroom = 404,
                IsOnline = false,
                IsParallel = true,
                IsClass = true,
                IsGroup = true
            },
            new Cell
            {
                CellId = 5,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 8, 0, 0 ),
                EndTime = new TimeOnly( 9, 30, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 2 } },
                NumberOfGroup = 3,
                CurrentGroup = 2,
                Subject =
                    new Subject
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
            new Cell
            {
                CellId = 6,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 9, 50, 0 ),
                EndTime = new TimeOnly( 11, 20, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 2 } },
                NumberOfGroup = 2,
                CurrentGroup = 2,
                Subject = new Subject { SubjectId = 14, TeacherName = "Охотников С.А.", SubjectName = "АиП" },
                Classroom = 405,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new Cell
            {
                CellId = 7,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 11, 40, 0 ),
                EndTime = new TimeOnly( 13, 10, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 2 } },
                NumberOfGroup = 3,
                CurrentGroup = 2,
                Subject =
                    new Subject
                    {
                        SubjectId = 15, TeacherName = "Гусарова Л.Г.", SubjectName = "Теор. вер. и статистика"
                    },
                Classroom = 406,
                IsOnline = true,
                IsParallel = false,
                IsClass = true,
                IsGroup = false
            },
            new Cell
            {
                CellId = 8,
                WeekDay = DayOfWeek.Tuesday,
                StartTime = new TimeOnly( 13, 20, 0 ),
                EndTime = new TimeOnly( 14, 50, 0 ),
                Class = new List<ShortClassInfo> { new ShortClassInfo { ClassId = 16 } },
                NumberOfGroup = 2,
                CurrentGroup = 3,
                Subject =
                    new Subject
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

        SchoolMeeting schoolMeeting = new SchoolMeeting
        {
            Text = "Общелицейская линейка",
            WeekDay = DayOfWeek.Wednesday,
            StartTime = new TimeOnly( 8, 0, 0 ),
            EndTime = new TimeOnly( 8, 20, 0 )
        };

        TimetableResponseDto timetableResponse = new TimetableResponseDto
        {
            Cells = cells, SchoolMeeting = schoolMeeting
        };

        return Ok( timetableResponse );
    }

    [HttpPut( "update" )]
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


    // TODO: как лучше роут назвать?
    [HttpPut( "cell-deletion" )]
    public IActionResult DeleteTimetableCell( [FromBody] TimetableDeleteCellRequestDto timetableDeleteCellRequestDto )
    {
        // mock

        int classIdNotFound = 1;
        if ( false )
        {
            return BadRequest( $"Class id {classIdNotFound} wasn't found" );
        }

        return Ok();
    }

    [HttpPost( "application" )]
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

    [HttpPost( "excel-saving" )]
    public IActionResult SaveExcelTimetable( [FromBody] TimetableSaveExcelRequestDto timetableSaveExcelRequestDto )
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

    [HttpPost( "report-card-saving" )]
    public IActionResult SaveReportCardTimetable(
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

    [HttpGet( "days-of-week" )]
    public IActionResult GetDaysOfWeek()
    {
        // TODO: у нас есть точно такой же по смыслу запрос для styding activity; может оставить один из?
        // TODO: вообще вроде как договорились не делать вообще этот запрос, а фронту дать заранее маппинг с enum на дни недели
        // mock

        return Ok();
    }

    [HttpGet( "weeks" )]
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
                new List<WeekInfo>() { new WeekInfo { Week = 1, Content = "Неделя 1 01.01.2023 - 07.01.2023" } },
        };

        return Ok( responseDto );
    }

    [HttpGet( "classes" )]
    public IActionResult GetTimetableClasses( [FromQuery] TimetableClassesResponseDto timetableClassesResponseDto )
    {
        // mock
        if ( false )
        {
            return NotFound( "Не найдено такого года" );
        }

        TimetableClassesResponseDto responseDto = new TimetableClassesResponseDto
        {
            Classes = new List<ClassInfo>()
            {
                new ClassInfo() { ClassId = 1, ClassName = "10-1" },
                new ClassInfo() { ClassId = 2, ClassName = "10-2" },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "subjects" )]
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
            Subjects = new List<SubjectInfo>()
            {
                new SubjectInfo() { SubjectId = 1, TeacherName = "Архимед", SubjectName = "Физика" },
                new SubjectInfo() { SubjectId = 2, TeacherName = "Плутарх", SubjectName = "Философия" },
                new SubjectInfo() { SubjectId = 3, TeacherName = "Ньютон", SubjectName = "Механика" },
            }
        };

        return Ok( responseDto );
    }

    [HttpGet( "pair-time-ranges" )]
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
            PairTimeRanges = new List<PairTimeRange>()
            {
                new PairTimeRange()
                {
                    StartTime = new TimeOnly( 8, 0, 0 ), EndTime = new TimeOnly( 9, 50, 0 ), Id = 1
                },
            }
        };

        return Ok( responseDto );
    }
    
    [HttpGet( "lesson-time-ranges" )]
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
            LessonTimeRanges = new List<LessonTimeRange>()
            {
                new LessonTimeRange()
                {
                    StartTime = new TimeOnly( 8, 0, 0 ), EndTime = new TimeOnly( 8, 40, 0 ), Id = 1
                },
            }
        };

        return Ok( responseDto );
    }
}