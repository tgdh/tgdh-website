using System;
using Umbraco.Core.Models;

public interface ICardBase
{
    int Id { get; }

    string Headline { get; }

    string Url { get; }

    IPublishedContent CoverImage { get; set; }

    IPublishedContent Thumbnail { get; set; }
}
