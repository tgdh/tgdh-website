using System.Web;

public class QuoteViewModel
{
    public IHtmlString Quote { get; set; }

    public string Source { get; set; }

    public string Alignment { get; set; }

    public string AdditionalClass { get; set; }

    public string WrapClasses { get; set; }

    public QuoteViewModel()
    {

    }
}
