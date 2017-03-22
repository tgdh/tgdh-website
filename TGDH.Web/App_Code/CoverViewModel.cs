using System.Web;

public class CoverViewModel
{
    public string ImageIds { get; set; }

    public string Headline { get; set; }

    public IHtmlString Subtitle { get; set; }

    public string SubtitleLabel { get; set; }

    public IHtmlString Copy { get; set; }

    public string Cta { get; set; }

}
