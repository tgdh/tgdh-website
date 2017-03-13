using System;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace TGDH.Core.ExtensionMethods
{
    public static class String
    {
        private static readonly string LettersAndDigitsPattern = @"[^0-9a-zA-Z]+";

        /// <summary>
        /// Checks if the given email address is a valid MailAddress
        /// </summary>
        /// <param name="email">Email address</param>
        /// <returns>True or false</returns>
        public static bool IsValidEmail(this string email)
        {
            try
            {
                var addr = new MailAddress(email.Trim());
                return addr.Address == email;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        /// <summary>
        /// Converts the given string to 0-9 and a-z format
        /// </summary>
        /// <param name="source">String to convert</param>
        /// <returns>Converted lowercase string</returns>
        public static string ConvertToId(this string source)
        {
            return !string.IsNullOrWhiteSpace(source) ? Regex.Replace(source, LettersAndDigitsPattern, string.Empty).ToLower() : "";
        }

        /// <summary>
        /// Creates a new Guid
        /// </summary>
        /// <returns>A unique Guid</returns>
        public static string CreateGuid()
        {
            return Guid.NewGuid().ToString("N");
        }

        //public static bool IsValidUrl(this string source)
        //{
        //    Uri uriResult;
        //    return Uri.TryCreate(source, UriKind.Absolute, out uriResult) && uriResult.Scheme == Uri.UriSchemeHttp;
        //}
    }
}
