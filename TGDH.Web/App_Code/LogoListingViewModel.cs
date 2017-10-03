using System.Collections.Generic;
using Umbraco.Core.Models;

public class LogoListingViewModel
{
    public IEnumerable<IPublishedContent> LogoListing { get; set; }

    public string ModifierClass { get; set; }
}
