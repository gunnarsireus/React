using System.Web.Mvc;

namespace MVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "React";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "About";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact";

            return View();
        }
    }
}