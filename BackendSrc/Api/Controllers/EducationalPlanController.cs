using Api.Mappers;
using Domain.TeacherEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/educational-plan" )]
public class EducationalPlanController : ControllerBase
{
    [HttpGet( "teachers" )]
    public IActionResult SearchTeachers( [FromQuery] string year )
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
        List<Teacher> mockTeachers = new() { mockTeacher };

        return Ok( mockTeachers.Map() );
    }
}