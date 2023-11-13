using Api.Models.TeacherTimetable.TeacherTimetable;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Description;

namespace Api.Controllers;

[Route( "api/teacher-timetable" )]
[ApiController]
public class TeacherTimetableController : ControllerBase
{
    [HttpGet( "teachers" )]
    [ResponseType( typeof( TeacherTimetableListResponseDto ) )]
    public IActionResult GetTeachers( [FromQuery] TeacherTimetableListRequestDto teacherTimetableRequest )
    {
        // mock
        // Вызываем сервис для получения преподавателей

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
    public IActionResult SetAvailableHours( TeacherTimetableSaveRequestDto teacherTimetableRequest )
    {
        // mock
        // Вызываем сервис для сохранения изменений
        return Ok();
    }

    [HttpGet( "available-hours" )]
    [ResponseType( typeof( AvailableHoursResponseListDto ) )]
    public IActionResult GetAvailableHours ()
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
