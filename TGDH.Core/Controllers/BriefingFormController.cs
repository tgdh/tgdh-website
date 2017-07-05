using System;
using System.Web.Mvc;
using TGDH.Core.Utility;
using Umbraco.Core.Logging;
using Umbraco.Web;
using Umbraco.Web.Mvc;
using Umbraco.Core;
using TGDH.Core.Models;
using System.Text.RegularExpressions;
using System.Net.Mail;
using System.IO;
using TGDH.Core.ExtensionMethods;
using System.Linq;
using System.Reflection;
using System.ComponentModel;

namespace TGDH.Core.Controllers
{
    public class BriefingFormController : SurfaceController
    {
        public readonly MailHelper _mailHelper = new MailHelper();
        private const int FormFolderId = Constants.BriefingFormFolderId;
        private string profiles = "";
        private string caseStudies = "";
        private string howWeDoThings = "";
        private string yourProject = "";
        private string fileUploadName = "";
        private string HtmlProfiles = "";

        public ActionResult RenderBriefingForm()
        {
            return PartialView("~/Views/Partials/Forms/BriefingFormView.cshtml", new BriefingForm());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ProcessFormSubmission(BriefingForm model)
        {
            if (!ModelState.IsValid)
            {
                TempData["BriefingFormValidationFailed"] = "The form validation could not pass. Please check your input.";

                return CurrentUmbracoPage();
            }

            TempData["BriefingFormValidationPasses"] = "The form has been validated successfully.";
            TempData["BriefingFormFormFolderId"] = FormFolderId;

            SaveUploadedFile(model);

            var formFolder = Umbraco.TypedContent(FormFolderId);

            if (formFolder != null && formFolder.HasValue("redirectPage"))
            {
                return RedirectToUmbracoPage(formFolder.GetPropertyValue<int>("redirectPage"));
            }

            return RedirectToCurrentUmbracoPage();
        }

        private string SaveUploadedFile(BriefingForm model)
        {
            if (model.BreifUploadOrCreation == "already-have-brief")
            {
                TempData["brief"] = "File Uploaded";
                //Upload the breif as the input is filled in
                try
                {
                    var companyName = "";
                    string pattern = @"[^0-9a-zA-Z\.]+";
                    Regex rgx = new Regex(pattern);
                    var fileName = rgx.Replace(model.Attachment.FileName, "");
                    fileUploadName = fileName;
                    var ext = fileName.Substring(fileName.LastIndexOf('.') + 1).ToLower();
                    if(model.CompanyName != null)
                    {
                        companyName = model.CompanyName;
                    }
                    var mediaType = global::Umbraco.Core.Constants.Conventions.MediaTypes.File;

                    const int uploadFolderId = 1710;
                    var mediaService = ApplicationContext.Current.Services.MediaService;
                    var uploadedCVFile = mediaService.CreateMedia(companyName + " - " + fileName, uploadFolderId, mediaType);
                    uploadedCVFile.SetValue("umbracoFile", model.Attachment);
                    mediaService.Save(uploadedCVFile);

                    TempData["SavePassed"] = "File Upload Successful";

                    CreateProfileList(model);
                    CreateCaseStudyList(model);
                    HowWeDoThingsList(model);
                    YourProjectList(model);
                    SaveBriefingFormSubmission(model);
                    SendEmailNotifications(model);
                    return "passed";

                }
                catch (Exception ex)
                {
                    TempData["SaveFailed"] = ex.Message;

                    throw;
                }
            }
            else
            {
                //No brief uploaded so ignore upload stage
                CreateProfileList(model);
                CreateCaseStudyList(model);
                HowWeDoThingsList(model);
                YourProjectList(model);
                SaveBriefingFormSubmission(model);
                SendEmailNotifications(model);
                return "passed";
            }
        }

        private void CreateProfileList(BriefingForm model)
        {
            if (model.ProfileAdam == true)
            {
                profiles = profiles + "Adam Stephenson" + ", ";
            }
            if (model.ProfileAndrea == true)
            {
                profiles = profiles + "Andrea Oggiano" + ", ";
            }
            if (model.ProfileDan == true)
            {
                profiles = profiles + "Dan Jubb" + ", ";
            }
            if (model.ProfileDebbie == true)
            {
                profiles = profiles + "Debbie Lawrenson" + ", ";
            }
            if (model.ProfileKev == true)
            {
                profiles = profiles + "Kev Simpson" + ", ";
            }
            if (model.ProfileLewis == true)
            {
                profiles = profiles + "Lewis Smith" + ", ";
            }
            if (model.ProfileLuke == true)
            {
                profiles = profiles + "Luke Gibson" + ", ";
            }
            if (model.ProfileMaureen == true)
            {
                profiles = profiles + "Maureen Doolan" + ", ";
            }
            if (model.ProfileSam == true)
            {
                profiles = profiles + "Sam McGuire" + ", ";
            }
            if (profiles == "")
            {
                profiles = "No Profiles Chosen.";
            }
        }

        private void CreateCaseStudyList(BriefingForm model)
        {
            if (model.CaseStudyEvodia == true)
            {
                caseStudies = caseStudies + "Evodia" + ", ";
            }
            if (model.CaseStudyMayerBrown == true)
            {
                caseStudies = caseStudies + "Mayer Brown" + ", ";
            }
            if (model.CaseStudyOctogon == true)
            {
                caseStudies = caseStudies + "Octogon" + ", ";
            }
            if (model.CaseStudyPoleStarGlobal == true)
            {
                caseStudies = caseStudies + "Pole Star Global" + ", ";
            }
            if (model.CaseStudyStWilfridsHospice == true)
            {
                caseStudies = caseStudies + "St Wilfrid's Hospice" + ", ";
            }
            if (caseStudies == "")
            {
                caseStudies = "No Case Studies Chosen.";
            }
        }

        private void HowWeDoThingsList(BriefingForm model)
        {
            if (model.HowWeDoThingsApproachAndMethodology == true)
            {
                howWeDoThings = howWeDoThings + "Approach & Methodology" + ", ";
            }
            if (model.HowWeDoThingsAboutUmbraco == true)
            {
                howWeDoThings = howWeDoThings + "About Umbraco" + ", ";
            }
            if (model.HowWeDoThingsBrowser == true)
            {
                howWeDoThings = howWeDoThings + "Browser Support & Testing" + ", ";
            }
            if (howWeDoThings == "")
            {
                howWeDoThings = "No Options Chosen.";
            }
        }

        private void YourProjectList(BriefingForm model)
        {
            if (model.YourProjectOurUnderstanding == true)
            {
                yourProject = yourProject + "Our Understanding of your requirements" + ", ";
            }
            if (model.YourProjectProjectCosts == true)
            {
                yourProject = yourProject + "Project costs & deliverables" + ", ";
            }
            if (model.YourProjectCopywriting == true)
            {
                yourProject = yourProject + "Copywriting" + ", ";
            }
            if (model.YourProjectContentAndSocial == true)
            {
                yourProject = yourProject + "Content & social strategy" + ", ";
            }
            if (model.YourProjectPricing == true)
            {
                yourProject = yourProject + "Pricing schedule" + ", ";
            }
            if (model.YourProjectHosting == true)
            {
                yourProject = yourProject + "Hosting" + ", ";
            }
            if (model.YourProjectCloseAndProjectAgreement == true)
            {
                yourProject = yourProject + "Close & project agreement" + ", ";
            }
            if (yourProject == "")
            {
                yourProject = "No Options Chosen.";
            }
        }

        private void SaveBriefingFormSubmission(BriefingForm model)
        {
            try
            {
                var contentService = Services.ContentService;
                var formSubmission = contentService.CreateContent(model.YourName + ", " + model.PhoneNumber + " - " + DateTime.Now.ToShortDateString(), FormFolderId, "briefingFormContent");

                formSubmission.SetValue("name", model.YourName);
                formSubmission.SetValue("phoneNumber", model.PhoneNumber);
                formSubmission.SetValue("emailAddress", model.EmailAddress);
                formSubmission.SetValue("companyName", model.CompanyName);
                formSubmission.SetValue("budget", model.Budget);
                formSubmission.SetValue("purposesOfNewSite", model.PurposesOfTheNewSite);
                formSubmission.SetValue("secondaryGoalsNewSite", model.SecondaryGoalsOfTheNewSite);
                formSubmission.SetValue("threeYearTime", model.ThreeYearsTime);
                formSubmission.SetValue("targetAudience", model.CurrentTargetAudience);
                formSubmission.SetValue("typicalTask", model.TypicalTask);
                formSubmission.SetValue("whatDoThesePeopleCareAbout", model.CurrentVisitorInformation);
                formSubmission.SetValue("actualThinkAndFeel", model.TargetAudienceThinkAndFeel);
                formSubmission.SetValue("wantThinkAndFeel", model.WhatYouWantAudienceThinkAndFeel);
                formSubmission.SetValue("improveWebsiteToAchieve", model.ImproveWebsiteAchieve);
                formSubmission.SetValue("adjectivesDescriptWebsitePercieved", model.AdjectivesDescribePerceived);
                formSubmission.SetValue("overallMessage", model.OverallMessage);
                formSubmission.SetValue("successOfRedesign", model.MeasureSuccess);
                formSubmission.SetValue("distinctiveFeatures", model.DistinctiveFeatures);
                formSubmission.SetValue("currentSiteSuccess", model.CurrentSiteSuccess);
                formSubmission.SetValue("currentSiteNotSuccess", model.CurrentSiteFlaws);
                formSubmission.SetValue("additionalFeatures", model.AdditionalFeatures);
                formSubmission.SetValue("resourcesManageNewSite", model.ResourcesManageNewSite);
                formSubmission.SetValue("concicePhrase", model.ConcicePhrase);
                formSubmission.SetValue("staffProfiles", profiles);
                formSubmission.SetValue("caseStudies", caseStudies);
                formSubmission.SetValue("howWeDoThings", howWeDoThings);
                formSubmission.SetValue("yourProject", yourProject);
                if (model.BreifUploadOrCreation == "already-have-brief")
                {
                    formSubmission.SetValue("briefUploadTitle", fileUploadName);
                }
                contentService.SaveAndPublishWithStatus(formSubmission);
            }
            catch (Exception ex)
            {
                LogHelper.Warn(GetType(), "Briefing form saving failed with the exception: " + ex.Message);
            }

        }

        private void SendEmailNotifications(BriefingForm model)
        {
            var formFolder = Umbraco.TypedContent(FormFolderId);
            var briefUploaded = "";

            if(formFolder == null)
            {
                return;
            }

            var to = formFolder.GetPropertyValue<string>("internalNotificationAddress");
            if(string.IsNullOrWhiteSpace(to))
            {
                return;
            }
            var cc = formFolder.GetPropertyValue<string>("internalNotificationCc");
            if(string.IsNullOrWhiteSpace(cc))
            {
                cc = to;
            }
            var subj = "Briefing Form Submitted";
            MailMessage mail = new MailMessage();

            foreach (var emailAddress in cc.Split(','))
            {
                if(StringExtensionMethods.IsValidEmail(emailAddress))
                {
                    mail.CC.Add(emailAddress);
                }
            }

            if (model.BreifUploadOrCreation == "already-have-brief")
            {
                string pattern = @"[^0-9a-zA-Z\.]+";
                Regex rgx = new Regex(pattern);
                var fileName = rgx.Replace(model.Attachment.FileName, "");
                var fileUploadName = model.CompanyName + "-" + fileName;

                briefUploaded = "A brief named '" + fileUploadName + "' was uploaded to the media folder in Umbraco.";
            }

            var HtmlBrief = "{{Brief}}";
            if(model.BreifUploadOrCreation == "already-have-brief")
            {
                HtmlBrief = "<p><strong>Brief Upload: </strong>{{Brief}}</p>";
            }
            var HtmlPurpose = "<p><strong>Briefing what are the purposes of the new site?: </strong>{{Purpose}}</p>";
            if(string.IsNullOrWhiteSpace(model.PurposesOfTheNewSite))
            {
                HtmlPurpose = "";
            }
            var HtmlSecondaryGoals = "<p><strong>What are the secondary goals of the new site?: </strong>{{SecondaryGoals}}</p>";
            if (string.IsNullOrWhiteSpace(model.SecondaryGoalsOfTheNewSite))
            {
                HtmlSecondaryGoals = "";
            }
            var HtmlThreeYears = "<p><strong>In 3 years' time, what are you hoping that the site will be doing for you?: </strong>{{ThreeYears}}</p>";
            if (string.IsNullOrWhiteSpace(model.ThreeYearsTime))
            {
                HtmlThreeYears = "";
            }
            var HtmlTargetAudience = "<p><strong>Who is your target audience?: </strong>{{CurrentTargetAudience}}</p>";
            if (string.IsNullOrWhiteSpace(model.CurrentTargetAudience))
            {
                HtmlTargetAudience = "";
            }
            var HtmlTypicalTask = "<p><strong>What is a typical task each of these visitors might perform on the new site?: </strong>{{TypicalTask}}</p>";
            if (string.IsNullOrWhiteSpace(model.TypicalTask))
            {
                HtmlTypicalTask = "";
            }
            var HtmlLongQuestion = "<p><strong>What do these people care about? Why are they interested in what the site will be offering? What trigger would prompt them to visit the site, and why would they be enticed to return?: </strong>{{LongQuestion}}</p>";
            if (string.IsNullOrWhiteSpace(model.CurrentVisitorInformation))
            {
                HtmlLongQuestion = "";
            }
            var HtmlTargetAudienceThinkAndFeel = "<p><strong>What does the target audience think and feel about the current website?: </strong>{{TargetAudienceThinkAndFeel}}</p>";
            if (string.IsNullOrWhiteSpace(model.TypicalTask))
            {
                HtmlTargetAudienceThinkAndFeel = "";
            }
            var HtmlWhatYouWantAudienceThinkAndFeel = "<p><strong>What do we want them to think and feel?: </strong>{{HtmlWhatYouWantAudienceThinkAndFeel}}</p>";
            if (string.IsNullOrWhiteSpace(model.WhatYouWantAudienceThinkAndFeel))
            {
                HtmlWhatYouWantAudienceThinkAndFeel = "";
            }
            var HtmlImproveWebsiteAchieve = "<p><strong>How would an improved website help to achieve this goal?: </strong>{{HtmlImproveWebsiteAchieve}}</p>";
            if (string.IsNullOrWhiteSpace(model.ImproveWebsiteAchieve))
            {
                HtmlImproveWebsiteAchieve = "";
            }
            var HtmlAdjectivesDescribePerceived = "<p><strong>What adjectives can be used to describe the way the website should be perceived?: </strong>{{HtmlAdjectivesDescribePerceived}}</p>";
            if (string.IsNullOrWhiteSpace(model.AdjectivesDescribePerceived))
            {
                HtmlAdjectivesDescribePerceived = "";
            }
            var HtmlOverallMessage = "<p><strong>What is the overall message you are trying to convey to your target audience?: </strong>{{HtmlOverallMessage}}</p>";
            if (string.IsNullOrWhiteSpace(model.OverallMessage))
            {
                HtmlOverallMessage = "";
            }
            var HtmlSuccess = "<p><strong>How will you measure the success of the redesigned site?: </strong>{{HtmlSuccess}}</p>";
            if (string.IsNullOrWhiteSpace(model.MeasureSuccess))
            {
                HtmlSuccess = "";
            }
            var HtmlDisFeature = "<p><strong>What are the distinctive features of this area of activity?: </strong>{{HtmlDisFeature}}</p>";
            if (string.IsNullOrWhiteSpace(model.DistinctiveFeatures))
            {
                HtmlDisFeature = "";
            }
            var HtmlCurrentSiteSuccess = "<p><strong>What areas of the current site are successful and why?: </strong>{{HtmlCurrentSiteSuccess}}</p>";
            if (string.IsNullOrWhiteSpace(model.CurrentSiteSuccess))
            {
                HtmlCurrentSiteSuccess = "";
            }
            var HtmlCurrentSiteFlaws = "<p><strong>What areas of the current site are not successful and why?: </strong>{{HtmlCurrentSiteFlaws}}</p>";
            if (string.IsNullOrWhiteSpace(model.CurrentSiteFlaws))
            {
                HtmlCurrentSiteFlaws = "";
            }
            var HtmlAdditionalFeatures = "<p><strong>What additional features do you think the site requires?: </strong>{{HtmlAdditionalFeatures}}</p>";
            if (string.IsNullOrWhiteSpace(model.AdditionalFeatures))
            {
                HtmlAdditionalFeatures = "";
            }
            var HtmlResourcesManageNewSite = "<p><strong>What resources are available to manage the new site?: </strong>{{HtmlResourcesManageNewSite}}</p>";
            if (string.IsNullOrWhiteSpace(model.ResourcesManageNewSite))
            {
                HtmlResourcesManageNewSite = "";
            }
            var HtmlConcicePhrase = "<p><strong>State a concise phrase that will appropriately describe the site once it is launched?: </strong>{{HtmlConcicePhrase}}</p>";
            if (string.IsNullOrWhiteSpace(model.ConcicePhrase))
            {
                HtmlConcicePhrase = "";
            }

            var HtmlCaseStudies = "";
            var HtmlWorkFlow = "";
            var HtmlTailoredRequirements = "";



            string emailBody = string.Empty;
            string emailInnerBody = "" +
                "<h2>About</h2>" + 
                "<p><strong>Name: </strong>{{Name}}</p>" +
                "<p><strong>Phone Number: </strong>{{Number}}</p>" +
                "<p><strong>Email Address: </strong>{{Email}}</p>" +
                "<p><strong>Company: </strong>{{Company}}</p>" +
                "<br><h2>Brief</h2>" +
                "<p><strong>Budget: </strong>{{Budget}}</p>" +
                HtmlBrief +
                HtmlPurpose +
                HtmlSecondaryGoals + 
                HtmlThreeYears +
                HtmlTargetAudience +
                HtmlTypicalTask +
                HtmlLongQuestion +
                HtmlTargetAudienceThinkAndFeel +
                HtmlWhatYouWantAudienceThinkAndFeel +
                HtmlImproveWebsiteAchieve +
                HtmlAdjectivesDescribePerceived +
                HtmlOverallMessage +
                HtmlSuccess +
                HtmlDisFeature + 
                HtmlCurrentSiteSuccess + 
                HtmlCurrentSiteFlaws + 
                HtmlAdditionalFeatures +
                HtmlResourcesManageNewSite + 
                HtmlConcicePhrase +
                "<br><h2>Build Your Proposal</h2>" +
                "<p><strong>Staff Profiles:</strong> " + profiles + "</p>" +
                "<p><strong>Case Studies:</strong> " + caseStudies + "</p>" +
                "<p><strong>The Workflow:</strong> " + howWeDoThings + "</p>" +
                "<p><strong>Your Project:</strong> " + yourProject + "</p>" 
                ;
            using(StreamReader reader = new StreamReader(Server.MapPath("~/App_Code/BriefTemplate.html")))
            {
                emailBody = reader.ReadToEnd();
            }
            emailInnerBody = emailInnerBody.Replace("{{Name}}", model.YourName);
            emailInnerBody = emailInnerBody.Replace("{{Number}}", model.PhoneNumber);
            emailInnerBody = emailInnerBody.Replace("{{Email}}", model.EmailAddress);
            emailInnerBody = emailInnerBody.Replace("{{Company}}", model.CompanyName);
            emailInnerBody = emailInnerBody.Replace("{{Budget}}", model.Budget);
            emailInnerBody = emailInnerBody.Replace("{{Brief}}", briefUploaded);
            emailInnerBody = emailInnerBody.Replace("{{Purpose}}", model.PurposesOfTheNewSite);
            emailInnerBody = emailInnerBody.Replace("{{SecondaryGoals}}", model.SecondaryGoalsOfTheNewSite);
            emailInnerBody = emailInnerBody.Replace("{{ThreeYears}}", model.ThreeYearsTime);
            emailInnerBody = emailInnerBody.Replace("{{CurrentTargetAudience}}", model.CurrentTargetAudience);
            emailInnerBody = emailInnerBody.Replace("{{TypicalTask}}", model.TypicalTask);
            emailInnerBody = emailInnerBody.Replace("{{LongQuestion}}", model.CurrentVisitorInformation);
            emailInnerBody = emailInnerBody.Replace("{{TargetAudienceThinkAndFeel}}", model.TargetAudienceThinkAndFeel);
            emailInnerBody = emailInnerBody.Replace("{{HtmlWhatYouWantAudienceThinkAndFeel}}", model.WhatYouWantAudienceThinkAndFeel);
            emailInnerBody = emailInnerBody.Replace("{{HtmlImproveWebsiteAchieve}}", model.ImproveWebsiteAchieve);
            emailInnerBody = emailInnerBody.Replace("{{HtmlAdjectivesDescribePerceived}}", model.AdjectivesDescribePerceived);
            emailInnerBody = emailInnerBody.Replace("{{HtmlOverallMessage}}", model.OverallMessage);
            emailInnerBody = emailInnerBody.Replace("{{HtmlSuccess}}", model.MeasureSuccess);
            emailInnerBody = emailInnerBody.Replace("{{HtmlDisFeature}}", model.DistinctiveFeatures);
            emailInnerBody = emailInnerBody.Replace("{{HtmlCurrentSiteSuccess}}", model.CurrentSiteSuccess);
            emailInnerBody = emailInnerBody.Replace("{{HtmlCurrentSiteFlaws}}", model.CurrentSiteFlaws);
            emailInnerBody = emailInnerBody.Replace("{{HtmlAdditionalFeatures}}", model.AdditionalFeatures);
            emailInnerBody = emailInnerBody.Replace("{{HtmlResourcesManageNewSite}}", model.ResourcesManageNewSite);
            emailInnerBody = emailInnerBody.Replace("{{HtmlConcicePhrase}}", model.ConcicePhrase);

            emailBody = emailBody.Replace("{{EmailBody}}", emailInnerBody);

            mail.From = new MailAddress("noreply@tgdh.co.uk", "The Graphic Design House");
            mail.To.Add(to);
            mail.Subject = subj;
            mail.Body = emailBody;
            mail.IsBodyHtml = true;

            SendMailMessage(mail);
        }

        private void SendMailMessage(MailMessage mailMessage)
        {
            using (SmtpClient client = new SmtpClient())
            {
                client.Send(mailMessage);
                mailMessage.Dispose();
            }
        }
    }
}
