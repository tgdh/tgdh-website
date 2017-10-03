using System;
using System.Collections.Generic;
using System.Linq;
using TGDH.Core.ExtensionMethods;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TGDH.Core.Data
{
    public static class DataHelpers
    {
        public static IEnumerable<IPublishedContent> FilterByDocumentType(IEnumerable<IPublishedContent> source, string documentType)
        {
            return source.Where(x => x.DocumentTypeAlias.Equals(documentType.ConvertToId(), StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public static IEnumerable<IPublishedContent> FilterBySelectedPrevaluePage(IEnumerable<IPublishedContent> source, string propertyAlias, IPublishedContent page)
        {
            return source.Where(x => x.GetPropertyValue<int>(propertyAlias) == page.Id).ToList();
        }

        public static IPublishedContent GetPrevaluePageByName(IEnumerable<IPublishedContent> source, string pageName)
        {
            var publishedContents = source as IList<IPublishedContent> ?? source.ToList();

            if (!publishedContents.ToList().Any()) return null;

            var firstPost = publishedContents.ToList().FirstOrDefault();

            if (firstPost != null)
            {
                var blogSettings = firstPost.Site().Descendants("tagSettings").FirstOrDefault();

                if (blogSettings != null)
                {
                    return blogSettings.Descendants().FirstOrDefault(d => d.Name.ConvertToId().Equals(pageName.ConvertToId()));
                }
            }

            return null;
        }

        public static IEnumerable<IPublishedContent> FilterByYearAndMonth(IEnumerable<IPublishedContent> source, string year, string month, string propertyAlias)
        {
            int yearInt;
            var monthInt = IntExtensionMethods.GetMonthNumber(month);
            var isValidYear = int.TryParse(year, out yearInt);

            if (!isValidYear) return source;

            source = source.Where(x => x.GetPropertyValue<DateTime>(propertyAlias).Year == yearInt);

            if (monthInt > 0)
            {
                source = source.Where(x => x.GetPropertyValue<DateTime>(propertyAlias).Month == monthInt);
            }

            return source;
        }
    }
}
