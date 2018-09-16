using System;
using System.Web.Mvc;
using TGDH.Core.Utility;
using Umbraco.Core.Logging;
using Umbraco.Web;
using Umbraco.Web.Mvc;
using TGDH.Core.Models;

namespace TGDH.Core.Controllers
{
    public class CampaignCallbackFormController : SurfaceController
    {
        private readonly MailHelper _mailHelper = new MailHelper();
        private const int FormFolderId = Constants.CampaignCallbackFormFolderId;

        public ActionResult RenderCampaignCallbackForm()
        {
            return PartialView("~/Views/Partials/Forms/CampaignCallbackFormView.cshtml", new CampaignCallbackForm());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ProcessFormSubmission(CampaignCallbackForm model)
        {
            if (!ModelState.IsValid)
            {
                TempData["CampaignCallbackFormValidationFailed"] = "The form validation could not pass. Please check your input.";

                return CurrentUmbracoPage();
            }

            TempData["CampaignCallbackFormValidationPasses"] = "The form has been validated successfully.";
            TempData["CampaignCallbackFormFormFolderId"] = FormFolderId;

            SaveCampaignCallbackFormSubmission(model);
            SendEmailNotifications(model);

            var formFolder = Umbraco.TypedContent(FormFolderId);

            if (formFolder != null && formFolder.HasValue("redirectPage"))
            {
                return RedirectToUmbracoPage(formFolder.GetPropertyValue<int>("redirectPage"));
            }

            return RedirectToCurrentUmbracoPage();
        }

        private void SaveCampaignCallbackFormSubmission(CampaignCallbackForm model)
        {
            try
            {
                var contentService = Services.ContentService;
                var formSubmission = contentService.CreateContent(model.PageName + ", " + model.Name + ", " + " - " + DateTime.Now.ToShortDateString(), FormFolderId, "campaignCallbackForm");

                formSubmission.SetValue("pageName", model.PageName);
                formSubmission.SetValue("personName", model.Name);
                formSubmission.SetValue("phoneNumber", model.PhoneNumber);
                formSubmission.SetValue("emailAddress", model.EmailAddress);

                contentService.Save(formSubmission);
            }
            catch (Exception ex)
            {
                LogHelper.Warn(GetType(), "Campaign callback form saving failed with the exception: " + ex.Message);
            }

        }

        private void SendEmailNotifications(CampaignCallbackForm model)
        {
            var formFolder = Umbraco.TypedContent(FormFolderId);

            if (formFolder != null)
            {
                _mailHelper.CreateAndSendNotifications(model, formFolder);
            }
            else
            {
                LogHelper.Warn(GetType(), "Couldn't get the form folder with the id: " + FormFolderId);
            }
        }
    }
}
