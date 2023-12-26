using Api.Mappers.EducationalPlan;
using Api.Models.EducationalPlan.Appointment;
using Api.Models.EducationalPlan.Difference;
using Api.Models.EducationalPlan.Plan;
using Api.Models.EducationalPlan.PlanSettings;
using Api.Models.EducationalPlan.Subject;
using Api.Models.EducationalPlan.Teacher;
using Application.Abstractions.EductionalPlan;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/educational-plan" )]
public sealed class EducationalPlanController : ControllerBase
{
    private readonly ITeacherService _teacherService;
    private readonly ISubjectService _subjectService;
    private readonly IAssignmentService _assignmentService;

    public EducationalPlanController(
        ITeacherService teacherService,
        ISubjectService subjectService,
        IAssignmentService assignmentService )
    {
        _teacherService = teacherService;
        _subjectService = subjectService;
        _assignmentService = assignmentService;
    }

    [HttpGet( "teachers" )]
    [ProducesResponseType<TeachersResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetTeachers( [FromQuery] TeachersRequestDto teachersRequest )
    {
        if ( !IsValidYear( teachersRequest.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok( _teacherService
            .GetTeachersByYear( teachersRequest.Year )
            .Map() );
    }

    [HttpPost( "teachers" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult CreateTeacher( [FromBody] TeacherCreateRequestDto teacherCreateRequestDto )
    {
        if ( !IsValidYear( teacherCreateRequestDto.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        _teacherService.AddTeacher(
            teacherCreateRequestDto.Year,
            teacherCreateRequestDto.Name,
            teacherCreateRequestDto.Category,
            teacherCreateRequestDto.CategoryPayrollAccounting,
            teacherCreateRequestDto.WorkingContract,
            teacherCreateRequestDto.WorkingContractPayrollAccounting,
            teacherCreateRequestDto.Education,
            teacherCreateRequestDto.IsClassroomTeacher,
            teacherCreateRequestDto.InDepthSubjectPayrollAccounting,
            teacherCreateRequestDto.EgeAffectsOnSalary,
            teacherCreateRequestDto.WorkingStartDate,
            teacherCreateRequestDto.WorkingExperienceAtTheTimeOfTheEmployment,
            teacherCreateRequestDto.BirthDay
        );

        return Ok();
    }

    [HttpPut( "teachers" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult UpdateTeachers( [FromBody] UpdateTeachersRequestDto updateTeachers)
    {
        if ( !IsValidYear( updateTeachers.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        foreach ( UpdateTeacherDto teacher in updateTeachers.Teachers )
        {
            _teacherService.UpdateTeacher(
                updateTeachers.Year,
                teacher.Name,
                teacher.Category,
                teacher.CategoryPayrollAccounting,
                teacher.WorkingContract,
                teacher.WorkingContractPayrollAccounting,
                teacher.Education,
                teacher.IsClassroomTeacher,
                teacher.InDepthSubjectPayrollAccounting,
                teacher.EgeAffectsOnSalary,
                teacher.WorkingStartDate,
                teacher.WorkingExperienceAtTheTimeOfTheEmployment,
                teacher.BirthDay
            );
        }

        return Ok();
    }

    [HttpDelete( "teachers" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult DeleteTeacher( [FromBody] DeleteTeacherRequestDto teacherRequestDto )
    {
        if ( _teacherService.IsExistingTeacher( teacherRequestDto.Id ) )
        {
            return NotFound( "Не найдено такого преподавателя" );
        }

        _teacherService.DeleteTeacher( teacherRequestDto.Id );
        return Ok();
    }

    [HttpGet( "subjects" )]
    [ProducesResponseType<SubjectsResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetSubjects( [FromQuery] SubjectsRequestDto subjectsRequest )
    {
        if ( !IsValidYear( subjectsRequest.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok( _subjectService
            .GetSubjectsByYear( subjectsRequest.Year )
            .Map() );
    }

    [HttpPost( "subjects" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult CreateSubject( [FromBody] CreateSubjectRequestDto createSubject )
    {
        if ( !IsValidYear( createSubject.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        _subjectService.AddSubject(
            createSubject.Year,
            createSubject.Id,
            createSubject.Name,
            createSubject.Financing,
            createSubject.Type,
            createSubject.Category,
            createSubject.SurchargeForNotebooks,
            createSubject.NumberOf10,
            createSubject.NumberOfGroupsIn10,
            createSubject.NumberOf11,
            createSubject.NumberOfGroupsIn11,
            createSubject.IsFinalExam
            );

        return Ok();
    }

    [HttpDelete( "subjects" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult DeleteSubject( [FromBody] DeleteSubjectRequestDto deleteSubject )
    {
        if ( _subjectService.GetSubjectById( deleteSubject.Id ) is not null ) 
        {
            _subjectService.DeleteSubject( deleteSubject.Id );
        }
        else
        {
            return NotFound( "Не найдено такого предмета" );
        }

        return Ok();
    }

    [HttpPut( "subjects" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult UpdateSubjects( [FromBody] UpdateSubjectsRequestDto updateSubjects )
    {
        foreach( SubjectDto subject in updateSubjects.Subjects )
        {
            if ( _subjectService.GetSubjectById( subject.Id ) is not null )
            {
                _subjectService.UpdateSubject(
                    updateSubjects.Year,
                    subject.Id,
                    subject.Name,
                    subject.PaymentType,
                    subject.Type,
                    subject.Category,
                    subject.NotebooksSurcharge,
                    subject.TenthCount,
                    subject.TenthGroupsCount,
                    subject.EleventhNumber,
                    subject.EleventhGroupsCount,
                    subject.IsFinalExam );
            }
            else
            {
                return NotFound( "Не найдено такого предмета" );
            }
        }
        
        return Ok();
    }

    [HttpGet( "assignments" )]
    [ProducesResponseType<AssignmentsResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetAssignments( [FromQuery] AssignmentsRequestDto assignmentsRequest )
    {
        if ( !IsValidYear( assignmentsRequest.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok( _assignmentService
            .GetAssignmentsByYear( assignmentsRequest.Year )
            .Map() );
    }

    [HttpGet( "differences" )]
    [ProducesResponseType<DifferencesResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status400BadRequest )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetDifferences( [FromQuery] DifferencesRequestDto differencesRequest )
    {
        if ( !IsValidYear( differencesRequest.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok( _assignmentService
            .GetDifferencesByYear( differencesRequest.Year )
            .Map() );
    }

    [HttpGet( "plan-settings" )]
    [ProducesResponseType<EducationalPlanSettingsResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetPlanSettings( [FromQuery] EducationalPlanSettingsRequestDto educationalPlanSettings )
    {
        // mock

        if ( !IsValidYear( educationalPlanSettings.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok( new EducationalPlanSettingsResponseDto
        {
            NumberOf10Classes = 2,
            NumberOf11Classes = 2,
            NumberOfWeeksIn1Quarter = 8,
            StartOf1Quarter = "23.09.2023",
            NumberOfWeeksIn2Quarter = 9,
            StartOf2Quarter = "05.11.2023",
            NumberOfWeeksIn3Quarter = 10,
            StartOf3Quarter = "09.01.2024",
            NumberOfWeeksIn4Quarter = 7,
            StartOf4Quarter = "10.04.2024",
            NumberOfWeeks = 34
        } );
    }

    [HttpPut( "plan-settings" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult UpdatePlanSettings( [FromBody] UpdateEducationalPlanSettingsRequestDto educationPlanSettingsDto )
    {
        if ( !IsValidYear( educationPlanSettingsDto.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        return Ok();
    }

    [HttpGet( "plan" )]
    [ProducesResponseType<EducationalPlanResponseDto>( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult GetEducationPlan( [FromQuery] EducationalPlanRequestDto planRequestDto )
    {
        if ( !IsValidYear( planRequestDto.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        if ( !IsValidClass( planRequestDto.Class ) )
        {
            return NotFound( "Не найдено такого класса" );
        }

        return Ok( new EducationalPlanResponseDto
        {
            Types = new List<string>
            {
                "Обязательный базовый",
                "Обязавельный профильный",
                "Элективный базовый",
                "Элективный профильный"
            },
            NumberOfWeeksIn1Quarter = 8,
            StartOf1Quarter = "01.09.2023",
            NumberOfWeeksIn2Quarter = 8,
            StartOf2Quarter = "09.11.2023",
            NumberOfWeeksIn3Quarter = 8,
            StartOf3Quarter = "09.01.2024",
            NumberOfWeeksIn4Quarter = 8,
            StartOf4Quarter = "11.04.2024",
            plan = new List<EducationalPlanDto>
            {
                new EducationalPlanDto
                {
                    Id = 1,
                    Name = "Физика",
                    Financing = "Бюджет",
                    Type = "Обязавельный профильный",
                    NumberOfGroups = 1,
                    HoursOf1Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf2Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf3Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf4Quarter = new List<int> { 12, 12, 12, 12 },
                },
                new EducationalPlanDto
                {
                    Id = 1,
                    Name = "Математика",
                    Financing = "Бюджет",
                    Type = "Элективный базовый",
                    NumberOfGroups = 1,
                    HoursOf1Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf2Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf3Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf4Quarter = new List<int> { 12, 12, 12, 12 },
                },
                new EducationalPlanDto
                {
                    Id = 1,
                    Name = "Литература",
                    Financing = "Внебюджет",
                    Type = "Обязательный базовый",
                    NumberOfGroups = 1,
                    HoursOf1Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf2Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf3Quarter = new List<int> { 12, 12, 12, 12 },
                    HoursOf4Quarter = new List<int> { 12, 12, 12, 12 },
                },
            }
        } );
    }

    [HttpPut( "plan" )]
    [ProducesResponseType( StatusCodes.Status200OK )]
    [ProducesResponseType( StatusCodes.Status404NotFound )]
    public IActionResult UpdateEducationPlan( [FromBody] UpdateEducationalPlanRequestDto planRequestDto )
    {
        if ( !IsValidYear( planRequestDto.Year ) )
        {
            return NotFound( "Не найдено такого года" );
        }

        if ( !IsValidClass( planRequestDto.Class ) )
        {
            return NotFound( "Не найдено такого класса" );
        }
        return Ok();
    }

    private bool IsValidYear( int year )
    {
        // TODO Определить границы лет
        return true;
    }

    private bool IsValidClass( int group )
    {
        return true;
    }
}