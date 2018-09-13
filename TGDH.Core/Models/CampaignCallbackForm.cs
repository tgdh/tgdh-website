using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TGDH.Core.Models
{
    public class CampaignCallbackForm
    {
        [DisplayName("Page name")]
        [MaxLength(254, ErrorMessage = "Field exceeded maximum length")]
        public string PageName { get; set; }

        [DisplayName("Your name")]
        [MaxLength(254, ErrorMessage = "Field exceeded maximum length")]
        [Required(ErrorMessage = "Please enter your name")]
        public string Name { get; set; }

        [DisplayName("Email adrress")]
        [MaxLength(254, ErrorMessage = "Field exceeded maximum length")]
        [Required(ErrorMessage = "Please enter your email address")]
        [EmailAddress]
        public string EmailAddress { get; set; }

        [DisplayName("Your number")]
        [Required(ErrorMessage = "Please enter your phone number")]
        public string PhoneNumber { get; set; }
    }
}