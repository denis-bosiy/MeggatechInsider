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
            // TODO Check user password

            return Ok();
        }
    }
}