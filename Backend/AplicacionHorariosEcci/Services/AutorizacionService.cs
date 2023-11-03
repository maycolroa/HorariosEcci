using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AplicacionHorariosEcci.Models;
using AplicacionHorariosEcci.Models.Custom;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;

namespace AplicacionHorariosEcci.Services
{
    public class AutorizacionService : IAutorizacionService
    {
        private readonly DbpruebaContext _context;
        private readonly IConfiguration _configuration;

        public AutorizacionService(DbpruebaContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        //private string GenerarToken(string idUsuario)
        //{
        //    var key = _configuration.GetValue<string>("JwtSettings:key");
        //    var keyBytes = Encoding.ASCII.GetBytes(key);
        //    var claims = new ClaimsIdentity();
        //    claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, idUsuario));
        //}

        public Task<AutorizacionResponse> DevolverToken(AutorizacionResponse autorizacion)
        {
            throw new NotImplementedException();
        }
    }
}
