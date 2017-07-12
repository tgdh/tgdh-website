
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TGDH.Core.Models
{
    public class CheckboxListItem  
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Subtitle { get; set; }

        public bool Checked { get; set; }
    }
}