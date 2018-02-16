using Umbraco.Core.Models;

public class ArticleSummaryViewModel
{
    public string Headline { get; set; }

	public string Subtitle { get; set; }

	public IPublishedContent Thumbnail { get; set; }

	public string ThumbnailLabel { get; set; }

	public string Url { get; set; }

	public string CTALabel { get; set; }

    public string Copy { get; set; }
}
