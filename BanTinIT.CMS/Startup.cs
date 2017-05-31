using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BanTinIT.CMS.Startup))]
namespace BanTinIT.CMS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
