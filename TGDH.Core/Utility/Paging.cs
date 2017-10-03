using System;
using System.Web;

namespace TGDH.Core.Utility
{
    public class Paging
    {
        public int TotalItems { get; set; }

        public int CurrentPage { get; set; }

        public int PageSize { get; set; }

        public int TotalPages { get; set; }

        public int StartPage { get; set; }

        public int EndPage { get; set; }

        public int Skip { get; set; }

        public int Take { get; set; }

        public int FirstOnpage { get; set; }

        public int LastOnPage { get; set; }

        public static Paging GetPages(int totalItems, int pageSize = 10)
        {
            int page;
            int.TryParse(HttpContext.Current.Request.QueryString["page"], out page);
            if (page == 0) page = 1;

            var totalPages = (int)Math.Ceiling(totalItems / (decimal)pageSize);
            var currentPage = page;
            var startPage = currentPage - 3;
            var endPage = currentPage + 2;
            int firstOnPage;
            int lastOnPage;

            if (startPage <= 0)
            {
                endPage -= startPage - 1;
                startPage = 1;
            }

            if (endPage > totalPages)
            {
                endPage = totalPages;

                if (endPage > 10)
                {
                    startPage = endPage - (pageSize - 1);
                }
            }

            if (currentPage == 1)
            {
                firstOnPage = 1;
                lastOnPage = 1 + pageSize;
            }
            else
            {
                firstOnPage = 1 + currentPage * pageSize - pageSize;
                lastOnPage = firstOnPage + pageSize;

                if (lastOnPage > totalItems)
                {
                    lastOnPage = totalItems;
                }
            }

            return new Paging
            {
                TotalItems = totalItems,
                CurrentPage = currentPage,
                PageSize = pageSize,
                TotalPages = totalPages,
                StartPage = startPage,
                EndPage = endPage,
                Take = pageSize,
                Skip = page * pageSize - pageSize,
                FirstOnpage = firstOnPage,
                LastOnPage = lastOnPage
            };
        }
    }
}