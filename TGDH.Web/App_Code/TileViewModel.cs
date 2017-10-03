using System.Web;

public class TileViewModel
{
    public string Url { get; set; }

    public int ImageId { get; set; }

    public string Headline { get; set; }

    public IHtmlString Subtitle { get; set; }

    public string Quote { get; set; }

    public string ModifierClass { get; set; }

}
