using Api.Mappers.EducationalPlan;
using Api.Models.EducationalPlan.Appointment;
using Api.Models.EducationalPlan.Difference;
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

    private bool IsValidYear( int year )
    {
        // TODO Определить границы лет
        return true;
    }
}