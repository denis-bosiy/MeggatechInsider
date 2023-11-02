using Api.Models.Account;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/account" )]
    public class AccountController : ControllerBase
    {
        [HttpPost( "login" )]
        public IActionResult LoginUser( [FromBody] CredentialsDto credentials )
        {
            // mock
            // TODO Check user password

            return Ok();
        }
    }
}