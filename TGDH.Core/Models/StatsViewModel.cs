using System.Collections.Generic;
using Umbraco.Core.Models;

public class StatsViewModel
{
    public IEnumerable<IPublishedContent> Stats { get; set; }

    public string ModifierClass { get; set; }

}
