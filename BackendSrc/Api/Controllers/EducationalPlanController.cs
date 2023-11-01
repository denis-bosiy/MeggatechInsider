using Api.Dto.SearchRequest;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route( "api/educational-plan" )]
public class EducationalPlanController : ControllerBase
{
    [HttpGet("teachers")]
    public IActionResult SearchTeachers( TeachersDto teachersDto )
    {
        // работаем с сервисом, который нам найдет учителей по переданной Dto
        
        
    }
}