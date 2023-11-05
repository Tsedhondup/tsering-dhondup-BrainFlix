// HOOKS
import { useState } from "react";
// STYLE
import "./VideoUploadForm.scss";
// COMPONENTS
import VideoUploadThumbnail from "./VideoUploadThumnail/VideoUploadThumbnail";
import VideoUploadInputs from "./VideoUploadInputs/VideoUploadInputs";
import VideoUploadButtons from "./VideoUploadButtons/VideoUploadButtons";
const VideoUploadForm = () => {
  const [vidTitle, setVidTitle] = useState("");
  const [vidDescription, setVidDescription] = useState("");
  const [titleErrorBorderClass, setTitleErrorBorderClass] = useState("");
  const [titleErrorMessageClass, setTitleErrorMessageClass] = useState("");
  const [descriptionErrorMessageClass, setDescriptionErrorMessageClass] =
    useState("");
  const [descriptionErrorBorderClass, setDescriptionErrorBorderClass] =
    useState("");

  // INPUTS VALUE HANDLERS
  const handleVideoTitle = (event) => {
    setVidTitle(event.target.value);
  };
  const handleVideoDescription = (event) => {
    setVidDescription(event.target.value);
  };
  // INPUT VALIDATION HANDLERS
  /*
   * onChang event
   * onBlur event
   */
  const handleTitleValidation = (event) => {
    setTitleErrorMessageClass(
      !event.target.value ? "form-input-container__title-error-msg-show" : ""
    );
    setTitleErrorBorderClass(
      !event.target.value ? "form-input-container__title-error-border" : ""
    );
  };

  const handleDescriptionValidation = (event) => {
    setDescriptionErrorMessageClass(
      !event.target.value
        ? "form-input-container__description-error-msg-show"
        : ""
    );
    setDescriptionErrorBorderClass(
      !event.target.value
        ? "form-input-container__description-error-border"
        : ""
    );
  };

  // HANDLE BUTTON UPLOAD BUTTON BACKGROUND
  const enableUploadButtonBackground = () => {
    if (vidTitle && vidDescription) {
      return "upload-button-enable-background-color";
    } else {
      return "";
    }
  };

  const enableButton = () => {
    if (!vidTitle || !vidDescription) {
      return false;
    }
    if (!vidTitle) {
      return false;
    }
    if (!vidDescription) {
      return;
    }

    return true;
  };

  return (
    <form className="video-upload-container__form">
      <div className="thumbnail-and-input-container">
        <VideoUploadThumbnail />
        <VideoUploadInputs
          vidTitle={vidTitle}
          handleVideoTitle={handleVideoTitle}
          handleTitleValidation={handleTitleValidation}
          titleErrorMessageClass={titleErrorMessageClass}
          titleErrorBorderClass={titleErrorBorderClass}
          vidDescription={vidDescription}
          handleVideoDescription={handleVideoDescription}
          handleDescriptionValidation={handleDescriptionValidation}
          descriptionErrorMessageClass={descriptionErrorMessageClass}
          descriptionErrorBorderClass={descriptionErrorBorderClass}
          enableButton={enableButton}
        />
      </div>

      <VideoUploadButtons
        enableButton={enableButton}
        enableUploadButtonBackground={enableUploadButtonBackground}
      />
    </form>
  );
};
export default VideoUploadForm;
