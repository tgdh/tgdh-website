using System;
using System.Web.Mvc;
using System.Text;
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
using Umbraco.Core.Models;

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
            return PartialView("~/Views/Partials/Forms/BriefingFormView.cshtml", new BriefForm() {
                CaseStudies = GetCaseStudyList(Umbraco),
                Profiles = GetProfileList(Umbraco),
                Workflow = GetWorkflowList(Umbraco),
                ProjectSpecifics = GetProjectSpecsList(Umbraco),
            });
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

            var formFolder = Umbraco.TypedContent(FormFolderId);
            if (formFolder != null && formFolder.HasValue("redirectPage"))
            {
                return RedirectToUmbracoPage(formFolder.GetPropertyValue<int>("redirectPage"));
            }
            return RedirectToCurrentUmbracoPage();
        }

        public static List<CheckboxListItem> GetCaseStudyList(UmbracoHelper umbraco) {
            var caseStudies = new List<CheckboxListItem>();

            var caseStudyFolder = umbraco.TypedContent(3158);
            if (caseStudyFolder == null) {
                return caseStudies;
            }
			var caseStudyOptions = caseStudyFolder != null ? caseStudyFolder.Children() : null;
            if (caseStudyOptions == null) {
                return caseStudies;
            }

			if (caseStudyOptions != null && caseStudyOptions.Any()) {
				var i = 0;
				foreach (var item in caseStudyOptions) {
					var name = item.Name;
					var subtitle = item.GetPropertyValue<string>("subtitle");
					var image = umbraco.TypedMedia(item.GetPropertyValue<int>("caseImage"));
                    var imageUrl = image != null ? image.GetCropUrl(cropAlias: "1:1", width: 146, upScale: false).ToString() : "";
                        
                    caseStudies.Add(
						new CheckboxListItem {Id = i, Name = name, Subtitle = subtitle, ImageUrl = imageUrl, Checked = false}
					);
					i = i + 1;
				}
			}

            return caseStudies;
        }

        public static List<CheckboxListItem> GetProfileList(UmbracoHelper umbraco) {
            var profiles = new List<CheckboxListItem>();

            var profileFolder = umbraco.TypedContent(3167);
            if (profileFolder == null) {
                return profiles;
            }
			var profileOptions = profileFolder != null ? profileFolder.Children() : null;
            if (profileOptions == null) {
                return profiles;
            }

			if (profileOptions != null && profileOptions.Any()) {
				var i = 0;
				foreach (var item in profileOptions) {
					var name = item.Name;
					var subtitle = item.GetPropertyValue<string>("jobTitle");
					var image = umbraco.TypedMedia(item.GetPropertyValue<int>("profileImage"));
                    var imageUrl = image != null ? image.GetCropUrl(cropAlias: "1:1", width: 146, upScale: false).ToString() : "";
                        
                    profiles.Add(
						new CheckboxListItem {Id = i, Name = name, Subtitle = subtitle, ImageUrl = imageUrl, Checked = false}
					);
					i = i + 1;
				}
			}

            return profiles;
        }

        public static List<CheckboxListItem> GetWorkflowList(UmbracoHelper umbraco) {
            var workflows = new List<CheckboxListItem>();

            var workflowFolder = umbraco.TypedContent(3168);
            if (workflowFolder == null) {
                return workflows;
            }
			var workflowOptions = workflowFolder != null ? workflowFolder.Children() : null;
            if (workflowOptions == null) {
                return workflows;
            }

			if (workflowOptions != null && workflowOptions.Any()) {
				var i = 0;
				foreach (var item in workflowOptions) {
					var name = item.Name;
					var note = item.GetPropertyValue<string>("subtitle");
					    
                    workflows.Add(
						new CheckboxListItem {Id = i, Name = name, Note = note, Checked = false}
					);
					i = i + 1;
				}
			}

            return workflows;
        }

        public static List<CheckboxListItem> GetProjectSpecsList(UmbracoHelper umbraco) {
            var projectSpecs = new List<CheckboxListItem>();

            var projectSpecsFolder = umbraco.TypedContent(3169);
            if (projectSpecsFolder == null) {
                return projectSpecs;
            }
			var projectSpecsOptions = projectSpecsFolder != null ? projectSpecsFolder.Children() : null;
            if (projectSpecsOptions == null) {
                return projectSpecs;
            }

			if (projectSpecsOptions != null && projectSpecsOptions.Any()) {
				var i = 0;
				foreach (var item in projectSpecsOptions) {
					var name = item.Name;
					var note = item.GetPropertyValue<string>("note");
                        
                    projectSpecs.Add(
						new CheckboxListItem {Id = i, Name = name, Note = note, Checked = false}
					);
					i = i + 1;
				}
			}

            return projectSpecs;
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
                    CreateAndSendExternalNotification(model);
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
                CreateAndSendExternalNotification(model);
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

        public static string GenerateHtmlQuestionMessage(Type type, string propertyName) {
            if (type == null) return "";
            return "<p><strong>" + DisplayNameHelper.GetDisplayName(type, propertyName) + ": </strong><br>{{" + propertyName +"}}</p>";
        }

        private static string GenerateBriefFromAnswers(BriefForm model, Type modelType) {
            if (model == null) return "";

            StringBuilder html = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(model.Budget)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "Budget"));
            }

            // 1
            if (!string.IsNullOrWhiteSpace(model.PurposesOfTheNewSite)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "PurposesOfTheNewSite"));
            }
            if (!string.IsNullOrWhiteSpace(model.SecondaryGoalsOfTheNewSite)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "SecondaryGoalsOfTheNewSite"));
            }
            if (!string.IsNullOrWhiteSpace(model.ThreeYearsTime)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "ThreeYearsTime"));
            }
            
            // 2
            if (!string.IsNullOrWhiteSpace(model.CurrentTargetAudience)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "CurrentTargetAudience"));
            }
            if (!string.IsNullOrWhiteSpace(model.TypicalTask)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "TypicalTask"));
            }
            if (!string.IsNullOrWhiteSpace(model.CurrentVisitorInformation)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "CurrentVisitorInformation"));
            }
            
            // 3
            if (!string.IsNullOrWhiteSpace(model.TargetAudienceThinkAndFeel)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "TargetAudienceThinkAndFeel"));
            }
            if (!string.IsNullOrWhiteSpace(model.WhatYouWantAudienceThinkAndFeel)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "WhatYouWantAudienceThinkAndFeel"));
            }
            if (!string.IsNullOrWhiteSpace(model.ImproveWebsiteAchieve)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "ImproveWebsiteAchieve"));
            }
            if (!string.IsNullOrWhiteSpace(model.AdjectivesDescribePerceived)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "AdjectivesDescribePerceived"));
            }
            
            // 4
            if (!string.IsNullOrWhiteSpace(model.OverallMessage)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "OverallMessage"));
            }
            if (!string.IsNullOrWhiteSpace(model.MeasureSuccess)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "OverallMessage"));
            }
            
            // 5
            if (!string.IsNullOrWhiteSpace(model.DistinctiveFeatures)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "DistinctiveFeatures"));
            }
            if (!string.IsNullOrWhiteSpace(model.CurrentSiteSuccess)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "CurrentSiteSuccess"));
            }
            if (!string.IsNullOrWhiteSpace(model.CurrentSiteFlaws)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "CurrentSiteFlaws"));
            }
            if (!string.IsNullOrWhiteSpace(model.AdditionalFeatures)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "AdditionalFeatures"));
            }
            
            // 6
            if (!string.IsNullOrWhiteSpace(model.ResourcesManageNewSite)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "ResourcesManageNewSite"));
            }
            
            // 7
            if (!string.IsNullOrWhiteSpace(model.ConcicePhrase)) {
                html.Append(GenerateHtmlQuestionMessage(modelType, "ConcicePhrase"));
            }

            return html.ToString();
        }

        private string GenerateEmailHtmlBody(BriefForm model, Type modelType) {
            var briefUploaded = "";
            if (model.BreifUploadOrCreation == "already-have-brief")
            {
                string pattern = @"[^0-9a-zA-Z\.]+";
                Regex rgx = new Regex(pattern);
                var fileName = rgx.Replace(model.Attachment.FileName, "");
                var fileUploadName = model.CompanyName + "-" + fileName;

                briefUploaded = "A brief named '" + fileUploadName + "' was uploaded to the media folder in Umbraco.";
            }

            var HtmlBrief = "";
            if(model.BreifUploadOrCreation == "already-have-brief")
            {
                HtmlBrief = "<p><strong>Brief Upload: </strong>{{Brief}}</p>";
            } else {
                HtmlBrief = GenerateBriefFromAnswers(model, modelType);
            }
            string emailInnerBody = "" +
                "<h2>About</h2>" +
                "<p><strong>" + DisplayNameHelper.GetDisplayName(modelType, "YourName") + ": </strong>{{YourName}}</p>" +
                "<p><strong>" + DisplayNameHelper.GetDisplayName(modelType, "PhoneNumber") + ": </strong>{{PhoneNumber}}</p>" +
                "<p><strong>" + DisplayNameHelper.GetDisplayName(modelType, "EmailAddress") + ": </strong>{{EmailAddress}}</p>" +
                "<p><strong>" + DisplayNameHelper.GetDisplayName(modelType, "CompanyName") + ": </strong>{{CompanyName}}</p>" +
                "<h2>Brief</h2>" +
                HtmlBrief +
                "<h2>Build Your Proposal</h2>" +
                "<p><strong>Team profiles:</strong> " + teamProfiles + "</p>" +
                "<p><strong>Case Studies:</strong> " + caseStudies + "</p>" +
                "<p><strong>The Workflow:</strong> " + workflow + "</p>" +
                "<p><strong>Project specifics:</strong> " + projectSpecifics + "</p>";
            
            emailInnerBody = emailInnerBody.Replace("{{YourName}}", model.YourName);
            emailInnerBody = emailInnerBody.Replace("{{PhoneNumber}}", model.PhoneNumber);
            emailInnerBody = emailInnerBody.Replace("{{EmailAddress}}", model.EmailAddress);
            emailInnerBody = emailInnerBody.Replace("{{CompanyName}}", model.CompanyName);
            emailInnerBody = emailInnerBody.Replace("{{Budget}}", model.Budget);
            emailInnerBody = emailInnerBody.Replace("{{Brief}}", briefUploaded);
            emailInnerBody = emailInnerBody.Replace("{{PurposesOfTheNewSite}}", model.PurposesOfTheNewSite);
            emailInnerBody = emailInnerBody.Replace("{{SecondaryGoalsOfTheNewSite}}", model.SecondaryGoalsOfTheNewSite);
            emailInnerBody = emailInnerBody.Replace("{{ThreeYearsTime}}", model.ThreeYearsTime);
            emailInnerBody = emailInnerBody.Replace("{{CurrentTargetAudience}}", model.CurrentTargetAudience);
            emailInnerBody = emailInnerBody.Replace("{{TypicalTask}}", model.TypicalTask);
            emailInnerBody = emailInnerBody.Replace("{{CurrentVisitorInformation}}", model.CurrentVisitorInformation);
            emailInnerBody = emailInnerBody.Replace("{{TargetAudienceThinkAndFeel}}", model.TargetAudienceThinkAndFeel);
            emailInnerBody = emailInnerBody.Replace("{{WhatYouWantAudienceThinkAndFeel}}", model.WhatYouWantAudienceThinkAndFeel);
            emailInnerBody = emailInnerBody.Replace("{{ImproveWebsiteAchieve}}", model.ImproveWebsiteAchieve);
            emailInnerBody = emailInnerBody.Replace("{{AdjectivesDescribePerceived}}", model.AdjectivesDescribePerceived);
            emailInnerBody = emailInnerBody.Replace("{{OverallMessage}}", model.OverallMessage);
            emailInnerBody = emailInnerBody.Replace("{{MeasureSuccess}}", model.MeasureSuccess);
            emailInnerBody = emailInnerBody.Replace("{{DistinctiveFeatures}}", model.DistinctiveFeatures);
            emailInnerBody = emailInnerBody.Replace("{{CurrentSiteSuccess}}", model.CurrentSiteSuccess);
            emailInnerBody = emailInnerBody.Replace("{{CurrentSiteFlaws}}", model.CurrentSiteFlaws);
            emailInnerBody = emailInnerBody.Replace("{{AdditionalFeatures}}", model.AdditionalFeatures);
            emailInnerBody = emailInnerBody.Replace("{{ResourcesManageNewSite}}", model.ResourcesManageNewSite);
            emailInnerBody = emailInnerBody.Replace("{{ConcicePhrase}}", model.ConcicePhrase);

            return emailInnerBody;
        }
        
        private void SendEmailNotifications(BriefForm model)
        {
            var formFolder = Umbraco.TypedContent(FormFolderId);
            var modelType = model.GetType();

            if(formFolder == null)
            {
                return;
            }

            var senderName = formFolder.GetPropertyValue<string>("senderName");
            var fromAddress = formFolder.GetPropertyValue<string>("fromAddress");
            if (!String.IsNullOrWhiteSpace(fromAddress)) {
                fromAddress = "noreply@tgdh.co.uk";
            }

            var to = formFolder.GetPropertyValue<string>("internalNotificationAddress");
            if(string.IsNullOrWhiteSpace(to))
            {
                return;
            }
            
            var subj = formFolder.GetPropertyValue<string>("internalNotificationSubject");
            MailMessage mail = new MailMessage();

            var cc = formFolder.GetPropertyValue<string>("internalNotificationCc");
            if (!string.IsNullOrWhiteSpace(cc)) {
                foreach (var emailAddress in cc.Split(','))
                {
                    if(StringExtensionMethods.IsValidEmail(emailAddress))
                    {
                        mail.CC.Add(emailAddress);
                    }
                }
            }

            var emailBodyInner = GenerateEmailHtmlBody(model, modelType);
            var emailBody = LoadEmailTemplate("BriefTemplate");
            
            emailBody = emailBody.Replace("{{EmailBody}}", emailBodyInner);

            mail.From = new MailAddress(fromAddress, senderName);
            mail.To.Add(to);
            mail.Subject = subj;
            mail.Body = emailBody;
            mail.IsBodyHtml = true;

            SendMailMessage(mail);
        }

        private void CreateAndSendExternalNotification(BriefForm model)
        {
            var formFolder = Umbraco.TypedContent(FormFolderId);
            var modelType = model.GetType();

            if(formFolder == null)
            {
                return;
            }

            var senderName = formFolder.GetPropertyValue<string>("senderName");
            var fromAddress = formFolder.GetPropertyValue<string>("fromAddress");
            if (!String.IsNullOrWhiteSpace(fromAddress)) {
                fromAddress = "noreply@tgdh.co.uk";
            }

            var to = model.EmailAddress;
            if(string.IsNullOrWhiteSpace(to))
            {
                return;
            }
            
            var subj = formFolder.GetPropertyValue<string>("notificationTitle");
            MailMessage mail = new MailMessage();

            var emailBodyInner = formFolder.GetPropertyValue<string>("notificationMessage") + GenerateEmailHtmlBody(model, modelType);
            var emailBody = LoadEmailTemplate("BriefTemplate");
            
            emailBody = emailBody.Replace("{{EmailBody}}", emailBodyInner);

            mail.From = new MailAddress(fromAddress, senderName);
            mail.To.Add(to);
            mail.Subject = subj;
            mail.Body = emailBody;
            mail.IsBodyHtml = true;

            SendMailMessage(mail);
        }

        private string LoadEmailTemplate(string emailtemplateName)
        {
            string emailTemplate;
            using (StreamReader reader = new StreamReader(Server.MapPath("~/App_Code/" + emailtemplateName + ".html")))
            {
                emailTemplate = reader.ReadToEnd();
            }

            return emailTemplate;
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
