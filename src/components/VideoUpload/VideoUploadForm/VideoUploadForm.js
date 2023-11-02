// HOOKS
import { useState } from "react";
// STYLE
import "./VideoUploadForm.scss";
// COMPONENTS
import VideoUploadInputs from "./VideoUploadInputs/VideoUploadInputs";
import VideoUploadButtons from "./VideoUploadButtons/VideoUploadButtons";
const VideoUploadForm = () => {
  const [vidTitle, setVidTitle] = useState("");
  const [vidDescription, setVidDescription] = useState("");
  const [titleErrorMessageClass, setTitleErrorMessageClass] = useState("");
  const [descriptionErrorMessageClass, setDescriptionErrorMessageClass] =
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
    setTitleErrorMessageClass(!event.target.value ? "js-input-error-msg" : "");
  };

  const handleDescriptionValidation = (event) => {
    setDescriptionErrorMessageClass(
      !event.target.value ? "js-input-error-msg" : ""
    );
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
    <form>
      <VideoUploadInputs
        vidTitle={vidTitle}
        handleVideoTitle={handleVideoTitle}
        handleTitleValidation={handleTitleValidation}
        titleErrorMessageClass={titleErrorMessageClass}
        vidDescription={vidDescription}
        handleVideoDescription={handleVideoDescription}
        handleDescriptionValidation={handleDescriptionValidation}
        descriptionErrorMessageClass={descriptionErrorMessageClass}
        enableButton={enableButton}
      />
      <VideoUploadButtons enableButton={enableButton} />
    </form>
  );
};
export default VideoUploadForm;
