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
using System.Collections.Generic;

namespace TGDH.Core.Controllers
{
    public class BriefFormController : SurfaceController
    {
        public readonly MailHelper _mailHelper = new MailHelper();
        private const int FormFolderId = Constants.BriefingFormFolderId;
        private string teamProfiles = "";
        private string caseStudies = "";
        private string workflow = "";
        private string projectSpecifics = "";
        private string fileUploadName = "";

        public ActionResult RenderBriefingForm()
        {
            return PartialView("~/Views/Partials/Forms/BriefingFormView.cshtml", new BriefForm());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ProcessFormSubmission(BriefForm model)
        {
            if (!ModelState.IsValid)
            {
                TempData["BriefingFormValidationFailed"] = "The form validation could not pass. Please check your input.";

                return CurrentUmbracoPage();
            }

            LogHelper.Warn(GetType(), "Briefing form model name: " + model.YourName);

            TempData["BriefingFormValidationPasses"] = "The form has been validated successfully.";
            TempData["BriefingFormFormFolderId"] = FormFolderId;

            // set selected checkbox values for later use
            try {
                teamProfiles = GetResultsFromList(model.Profiles);
                caseStudies = GetResultsFromList(model.CaseStudies);
                workflow = GetResultsFromList(model.Workflow);
                projectSpecifics = GetResultsFromList(model.ProjectSpecifics);
            } catch(Exception ex) {
                TempData["SaveFailed"] = ex.Message;
                LogHelper.Warn(GetType(), "Briefing form saving failed with the exception: " + ex.Message);
                throw;
            }

            SaveUploadedFile(model);

            // redirect page
            var formFolder = Umbraco.TypedContent(FormFolderId);
            if (formFolder != null && formFolder.HasValue("redirectPage"))
            {
                return RedirectToUmbracoPage(formFolder.GetPropertyValue<int>("redirectPage"));
            }
            return RedirectToCurrentUmbracoPage();
        }

        private string SaveUploadedFile(BriefForm model)
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
                SaveBriefingFormSubmission(model);
                SendEmailNotifications(model);
                return "passed";
            }
        }
        
        private void SaveBriefingFormSubmission(BriefForm model)
        {
            try
            {
                var contentService = Services.ContentService;
                var formSubmission = contentService.CreateContent(model.YourName + ", " + model.PhoneNumber + " - " + DateTime.Now.ToShortDateString(), FormFolderId, "briefingFormContent");

                formSubmission.SetValue("yourName", model.YourName);
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
                
                formSubmission.SetValue("teamProfiles", teamProfiles);
                formSubmission.SetValue("caseStudies", caseStudies);
                formSubmission.SetValue("workflow", workflow);
                formSubmission.SetValue("projectSpecifics", projectSpecifics);
                
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

        public string GetResultsFromList(List<CheckboxListItem> selection)
        {
            if (selection == null || !selection.Any())
            {
                return "N/A";
            }

            var stringToReturn = "";

            foreach(var item in selection)
            {
                if( item.Checked )
                {
                    if(String.IsNullOrWhiteSpace(stringToReturn)) {
                        stringToReturn = item.Name + ", ";
                    } else {
                        stringToReturn = stringToReturn + System.Environment.NewLine + item.Name + ", ";
                    }
                }
            }

            if(String.IsNullOrWhiteSpace(stringToReturn)) {
                stringToReturn = "N/A";
            }

            return stringToReturn.TrimEnd(", ");
        }

        private void SendEmailNotifications(BriefForm model)
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
                "<p><strong>Team profiles:</strong> " + teamProfiles + "</p>" +
                "<p><strong>Case Studies:</strong> " + caseStudies + "</p>" +
                "<p><strong>The Workflow:</strong> " + workflow + "</p>" +
                "<p><strong>Project specifics:</strong> " + projectSpecifics + "</p>" 
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
