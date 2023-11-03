using AplicacionHorariosEcci.Models.Custom;


namespace AplicacionHorariosEcci.Services
{
    public interface IAutorizacionService
    {
        Task<AutorizacionResponse> DevolverToken(AutorizacionResponse autorizacion);
    }
}
