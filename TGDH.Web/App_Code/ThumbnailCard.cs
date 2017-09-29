using System;
using Umbraco.Core.Models;

public class ThumbnailCardViewModel
{
    public int Id { get; set; }

    public string Headline { get; set; }

    public string Label { get; set; }

    public string Url { get; set; }

    public IPublishedContent CoverImage { get; set; }

    public string ModifierClass { get; set; }
}
