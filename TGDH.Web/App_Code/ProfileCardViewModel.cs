using System.Collections.Generic;
using System.Web;
using Umbraco.Core.Models;

public class ProfileCardViewModel
{
    public int ImageId { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string JobTitle { get; set; }

    public string ModifierClass { get; set; }

    public IEnumerable<IPublishedContent> SocialChannels { get; set; }

    public int SocialChannelIconSize { get; set; }

}
