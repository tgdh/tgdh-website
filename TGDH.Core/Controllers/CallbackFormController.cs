using System;
using System.Web.Mvc;
using TGDH.Core.Utility;
using Umbraco.Core.Logging;
using Umbraco.Web;
using Umbraco.Web.Mvc;
using TGDH.Core.Models;

namespace TGDH.Core.Controllers
{
    public class CallbackFormController : SurfaceController
    {
        private readonly MailHelper _mailHelper = new MailHelper();
        private const int FormFolderId = Constants.CallbackFormFolderId;

        public ActionResult RenderCallbackForm()
        {
            return PartialView("~/Views/Partials/Forms/CallbackFormView.cshtml", new CallbackForm());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ProcessFormSubmission(CallbackForm model)
        {
            if (!ModelState.IsValid)
            {
                TempData["CallbackFormValidationFailed"] = "The form validation could not pass. Please check your input.";

                return CurrentUmbracoPage();
            }

            TempData["CallbackFormValidationPasses"] = "The form has been validated successfully.";
            TempData["CallbackFormFormFolderId"] = FormFolderId;

            SaveCallbackFormSubmission(model);
            SendEmailNotifications(model);

            var formFolder = Umbraco.TypedContent(FormFolderId);

            if (formFolder != null && formFolder.HasValue("redirectPage"))
            {
                return RedirectToUmbracoPage(formFolder.GetPropertyValue<int>("redirectPage"));
            }

            return RedirectToCurrentUmbracoPage();
        }

        private void SaveCallbackFormSubmission(CallbackForm model)
        {
            try
            {
                var contentService = Services.ContentService;
                var formSubmission = contentService.CreateContent(model.Name + ", " + model.PhoneNumber + " - " + DateTime.Now.ToShortDateString(), FormFolderId, "callbackForm");

                formSubmission.SetValue("pageName", model.PageName);
                formSubmission.SetValue("personName", model.Name);
                formSubmission.SetValue("phoneNumber", model.PhoneNumber);

                contentService.SaveAndPublishWithStatus(formSubmission);
            }
            catch (Exception ex)
            {
                LogHelper.Warn(GetType(), "Callback form saving failed with the exception: " + ex.Message);
            }

        }

        private void SendEmailNotifications(CallbackForm model)
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
