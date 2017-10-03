using System;
using System.Globalization;
using System.Linq;

namespace TGDH.Core.ExtensionMethods
{
    public static class IntExtensionMethods
    {
        private static readonly string[] SizeSuffixes = { "bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" };
        public static string ToFileSize(this int value)
        {
            if (value < 0)
            {
                return "-" + ToFileSize(-value);
            }
            if (value == 0)
            {
                return "0.0 bytes";
            }

            var mag = (int)Math.Log(value, 1024);
            var adjustedSize = (decimal)value / (1L << (mag * 10));

            return $"{adjustedSize:n1} {SizeSuffixes[mag]}";
        }

        public static int GetMonthNumber(string monthName)
        {
            try
            {
                return DateTime.ParseExact(monthName, "MMMM", CultureInfo.InvariantCulture).Month;
            }
            catch
            {
                return 0;
            }
        }

        public static string GetDaySuffix(int day)
        {
            switch (day)
            {
                case 1:
                case 21:
                case 31:
                    return "st";
                case 2:
                case 22:
                    return "nd";
                case 3:
                case 23:
                    return "rd";
                default:
                    return "th";
            }
        }

        public static int GetRandomIntFromStringIds(string stringList)
        {
            if(String.IsNullOrWhiteSpace(stringList))
            {
                return 0;
            }
          var split = stringList.Split(',');
          var random = new Random();
          var randomInt = random.Next(split.Count());
          return Convert.ToInt32(split[randomInt]);
        }
    }
}
