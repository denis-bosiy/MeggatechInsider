using Api.Models.Account;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/account" )]
    public sealed class AccountController : ControllerBase
    {
        [HttpPost( "login" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status401Unauthorized )]
        public IActionResult LoginUser( [FromBody] CredentialsDto credentials )
        {
            // mock
            // TODO Check user password

            return Ok();
        }
    }
}