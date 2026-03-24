using Microsoft.AspNetCore.Mvc;
using TeknoSuites.Server.Model;


[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        // Simulación - después conectás con DB
        if (request.Email == "eudamonlabs@gmail.com" && request.Password == "1234")
        {
            return Ok(new
            {
                token = "fake-jwt-token",
                user = request.Email
            });
        }

        return Unauthorized("Credenciales inválidas");
    }
}

