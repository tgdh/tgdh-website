
using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TGDH.Core.Data
{
    public static class CaseStudyRepository
    {
        public static IEnumerable<IPublishedContent> AllCaseStudies(UmbracoHelper umbraco)
        {
            var caseStudyFolder = umbraco.TypedContentAtRoot().DescendantsOrSelf("caseStudies").FirstOrDefault();
            var caseStudies = new List<IPublishedContent>();

            if (caseStudyFolder == null)
            {
                return caseStudies;
            }

            caseStudies = caseStudyFolder.Children().ToList();

            return caseStudies;
        }

    }
}
