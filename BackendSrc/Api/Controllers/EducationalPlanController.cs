using System.Web.Http.Description;
using Api.Mappers;
using Api.Models.EducationalPlan.Appointment;
using Api.Models.EducationalPlan.Difference;
using Api.Models.EducationalPlan.Subject;
using Api.Models.EducationalPlan.Teacher;
using Domain.TeacherEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/educational-plan" )]
public sealed class EducationalPlanController : ControllerBase
{
    [HttpGet( "teachers" )]
    [ResponseType( typeof( TeachersResponseDto ) )]
    public IActionResult SearchTeachers( [FromQuery] TeacherRequestDto teacherRequestDto )
    {
        // mock
        // работаем с сервисом, который нам найдет учителей по переданной Dto

        Teacher mockTeacher = new(
            "Павел Ермаков",
            new TeacherCategory( "Высшая категория" ),
            true,
            new ContractType( "ГПХ" ),
            true,
            new Education( "Степень кандидата наук" ),
            true,
            true,
            false,
            new DateOnly( 2022, 3, 15 ),
            2,
            new DateOnly( 1980, 5, 10 )
        );
        List<Teacher> mockTeachers = new List<Teacher>() { mockTeacher };

        return Ok( mockTeachers.Map() );
    }

    [HttpGet( "subjects" )]
    public SubjectsResponseDto GetSubjects( [FromQuery] SubjectsRequestDto subjectsRequestDto )
    {
        // mock
        // Call some service to get Subjects

        return new SubjectsResponseDto()
        {
            Subjects = new List<SubjectDto>()
            {
                new SubjectDto()
                {
                    Id = 1,
                    Name = "Русский язык",
                    Financing = "some_financing",
                    Type = "some_type",
                    Category = "some_category",
                    NotebooksSurcharge = 12,
                    TenthCount = 2,
                    TenthGroupsCount = 2,
                    EleventhNumber = 2,
                    EleventhGroupsCount = 3,
                    IsFinalExam = true
                }
            }
        };
    }

    [HttpGet( "appointments" )]
    public AppointmentsResponseDto GetAppointments( [FromQuery] AppointmentsRequestDto appointmentsRequest )
    {
        // mock
        // Call some service to get Appointments

        return new AppointmentsResponseDto()
        {
            Appointments = new List<AppointmentDto>()
            {
                new AppointmentDto()
                {
                    Name = "Назначение 1",
                    TeacherName = "Ермаков Павел",
                    GroupsCount = 1,
                    StudentClassAllHours = 5,
                    StudentClassWeekHours = 5,
                    TeacherWeekYearHours = 3,
                    TeacherWeekPeriodHours = 3,
                    FirstSubgroupHours = 2,
                    SecondSubgroupHours = 2,
                    YearTotalHours = 10,
                    BidShare = 13
                }
            }
        };
    }

    [HttpGet( "differences" )]
    public DifferencesResponseDto GetDifferences( [FromQuery] DifferencesRequestDto differencesRequestDto )
    {
        // mock
        // Call some service to get Differences

        return new DifferencesResponseDto()
        {
            Differences = new List<DifferenceDto>()
            {
                new DifferenceDto() { Name = "Расхождение 1", GroupsCount = 2, PlanGroupsCount = 2 }
            }
        };
    }
}