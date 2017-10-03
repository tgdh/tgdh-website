
using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TGDH.Core.Data
{
    public static class CareerRepository
    {
        public static IEnumerable<IPublishedContent> AllVacancies(UmbracoHelper umbraco)
        {
            var careers = umbraco.TypedContentAtRoot().DescendantsOrSelf("careers").FirstOrDefault();
            var vacancies = new List<IPublishedContent>();

            if (careers == null)
            {
                return vacancies;
            }

            vacancies = careers.Descendants().ToList();

            return vacancies;
        }

    }
}
