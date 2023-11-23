using Api.Mappers.EducationalPlan;
using Api.Models.EducationalPlan.Appointment;
using Api.Models.EducationalPlan.Difference;
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

    private bool IsValidYear( int year )
    {
        // TODO Определить границы лет
        return true;
    }
}