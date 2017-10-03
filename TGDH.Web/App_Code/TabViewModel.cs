using System.Web;
using TGDH.Core.ExtensionMethods;
public class TabViewModel
{
    public string Heading { get; set; }

    public IHtmlString Content { get; set; }

    public string WrapClasses { get; set; }

    public string Id {
        get { return GetId(); } }

    private string GetId()
    {
        return Heading.ConvertToId();
    }
}
