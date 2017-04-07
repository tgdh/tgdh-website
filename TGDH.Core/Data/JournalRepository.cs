using System;
using System.Collections.Generic;
using System.Linq;
using TGDH.Core.Data;
using TGDH.ExtensionMethods.Strings;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TGDH.Core.Data
{
    public static class JournalRepository
    {
        public static IEnumerable<IPublishedContent> AllPosts(UmbracoHelper umbraco)
        {
            var root = umbraco.TypedContentAtRoot().DescendantsOrSelf("journal").FirstOrDefault();
            var posts = new List<IPublishedContent>();

            if (root == null)
            {
                return posts;
            }

            posts = root.Descendants().ToList();

            return posts;
        }

        public static IEnumerable<IPublishedContent> AllOrderedPosts(UmbracoHelper umbraco)
        {
            return AllPosts(umbraco).OrderByDescending(x => x.GetPropertyValue<DateTime>("releaseDate"));
        }

        public static bool StringInList(string stringInQuestion, string stringList)
        {
          return stringList.Split(',').Any( x => x.Equals(stringInQuestion, StringComparison.OrdinalIgnoreCase) );
        }

        public static IEnumerable<IPublishedContent> FilterSelection(IEnumerable<IPublishedContent> source, string author, string categories, string year, string month)
        {
            var filterByCategory = !string.IsNullOrWhiteSpace(categories);
            var filterByAuthor = !string.IsNullOrWhiteSpace(author);

            if (filterByAuthor && filterByCategory)
            {
                var postsInCategory = FilterBySelectedPrevaluePages(source, categories);
                var postsByAuthor = GetPostsWithPrevalue(source, author, "author");

                source = postsInCategory.Intersect(postsByAuthor).ToList();
            }
            else
            {
                if (filterByAuthor)
                {
                    source = GetPostsWithPrevalue(source, author, "author");
                }

                if (filterByCategory)
                {
                    source = FilterBySelectedPrevaluePages(source, categories);
                }
            }

            if (!string.IsNullOrWhiteSpace(year))
            {
                source = DataHelpers.FilterByYearAndMonth(source, year, month, "releaseDate");
            }

            return source;
        }

        public static bool CategoryIsMatch(IPublishedContent item, string categories)
        {
            return categories.Split(',').Any(
              cat =>  cat.Equals(item.Name.ConvertToId())
            );

          /*  item.GetPropertyValue<string>("categories").ToList().Any(
              cat => StringInList(cat.Name.ConvertToId(),categories)
            );
        */
        }

        public static IEnumerable<IPublishedContent> FilterBySelectedPrevaluePages(IEnumerable<IPublishedContent> source, string categories)
        {
          if(!String.IsNullOrWhiteSpace(categories))
          {
            return source;
          }
          var filteredEvents = source.Where(x => CategoryIsMatch(x, categories));
          return filteredEvents.ToList();
        }

        public static IEnumerable<IPublishedContent> GetPostsWithPrevalue(IEnumerable<IPublishedContent> source, string pageName, string docType)
        {
            var prevaluePage = DataHelpers.GetPrevaluePageByName(source, pageName);

            if (prevaluePage != null)
            {
                source = DataHelpers.FilterBySelectedPrevaluePage(source, docType, prevaluePage);
            }

            return source.ToList();
        }

        public static IEnumerable<IPublishedContent> AllFilteredPosts(UmbracoHelper umbraco, string category, string year, string month)
        {
            var allNewsArticles = AllOrderedPosts(umbraco);

            if (!string.IsNullOrWhiteSpace(category))
            {
                allNewsArticles = DataHelpers.FilterByDocumentType(allNewsArticles, category);
            }

            if (!string.IsNullOrWhiteSpace(year))
            {
                allNewsArticles = DataHelpers.FilterByYearAndMonth(allNewsArticles, year, month, "releaseDate");
            }

            return allNewsArticles;
        }
    }
}
