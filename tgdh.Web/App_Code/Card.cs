using System;
using Umbraco.Core.Models;

public class CardViewModel : ICardBase
{
    public int Id { get; set; }

    public string Headline { get; set; }

    public string Url { get; set; }

    public IPublishedContent CoverImage { get; set; }

    public IPublishedContent Thumbnail { get; set; }
}
