using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(POCSignalR.Startup))]
namespace POCSignalR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR(); //NIFO: register the middleWare. SignalR will be mapped
            ConfigureAuth(app);
        }
    }
}
