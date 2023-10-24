using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/account" )]
    public class AccountController : ControllerBase
    {
        [HttpPost( "login" )]
        public IActionResult LoginUser( CredentialsDto credentials )
        {
            if ( credentials == null || String.IsNullOrWhiteSpace( credentials.Password ) )
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}