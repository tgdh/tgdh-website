using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace TGDH.Core.Models
{
    public class BriefForm
    {
        [DisplayName("Your name")]
        public string YourName { get; set; }

        [DisplayName("Phone number")]
        public string PhoneNumber { get; set; }

        [DisplayName("Email address")]
        public string EmailAddress { get; set; }

        [DisplayName("Company name")]
        public string CompanyName { get; set; }

        [DisplayName("Budget")]
        public string Budget { get; set; }

        [DisplayName("Briefly what are the purposes of the new site?")]
        public string PurposesOfTheNewSite { get; set; }
        [DisplayName("What are the secondary goals of the new site?")]
        public string SecondaryGoalsOfTheNewSite { get; set; }
        [DisplayName("In 3 years’ time, what are you hoping that the site will be doing for you?")]
        public string ThreeYearsTime { get; set; }

        [DisplayName("Who is your target audience?")]
        public string CurrentTargetAudience { get; set; }
        [DisplayName("What is a typical task each of these visitors might perform on the new site?")]
        public string TypicalTask { get; set; }
        [DisplayName("What do these people care about? Why are they interested in what the site will be offering? What trigger would prompt them to visit the site, and why would they be enticed to return?")]
        public string CurrentVisitorInformation { get; set; }

        [DisplayName("What does the target audience think and feel about the current website?")]
        public string TargetAudienceThinkAndFeel { get; set; }
        [DisplayName("What do we want them to think and feel?")]
        public string WhatYouWantAudienceThinkAndFeel { get; set; }
        [DisplayName("How would an improved website help to achieve this goal?")]
        public string ImproveWebsiteAchieve { get; set; }
        [DisplayName("What adjectives can be used to describe the way the website should be perceived?")]
        public string AdjectivesDescribePerceived { get; set; }

        [DisplayName("What is the overall message you are trying to convey to your target audience?")]
        public string OverallMessage { get; set; }
        [DisplayName("How will you measure the success of the redesigned site?")]
        public string MeasureSuccess { get; set; }

        [DisplayName("What are the distinctive features of this area of activity?")]
        public string DistinctiveFeatures { get; set; }
        [DisplayName("What areas of the current site are successful and why?")]
        public string CurrentSiteSuccess { get; set; }
        [DisplayName("What areas of the current site are not successful and why not?")]
        public string CurrentSiteFlaws { get; set; }
        [DisplayName("What additional features do you think the site requires?")]
        public string AdditionalFeatures { get; set; }

        [DisplayName("What resources are available to manage the new site?")]
        public string ResourcesManageNewSite { get; set; }

        [DisplayName("State a concise phrase that will appropriately describe the site once it is launched")]
        public string ConcicePhrase { get; set; }

        public List<CheckboxListItem> CaseStudies { get; set; }

        public List<CheckboxListItem> Profiles { get; set; }

        public List<CheckboxListItem> Workflow { get; set; }

        public List<CheckboxListItem> ProjectSpecifics { get; set; }

        public string BreifUploadOrCreation { get; set; }

        public HttpPostedFileBase Attachment { get; set; }

        public BriefForm()
        {

        }
    }
    
}
