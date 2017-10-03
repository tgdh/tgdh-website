
using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TGDH.Core.Data
{
    public static class TeamRepository
    {
        public static IEnumerable<IPublishedContent> AllProfiles(UmbracoHelper umbraco)
        {
            var team = umbraco.TypedContentAtRoot().DescendantsOrSelf("team").FirstOrDefault();
            var allProfiles = new List<IPublishedContent>();

            if (team == null)
            {
                return allProfiles;
            }

            allProfiles = team.Descendants("profile").ToList();

            return allProfiles;
        }

    }
}
