// HOOKS
import { useState } from "react";
// STYLE
import "./VideoUploadForm.scss";
// COMPONENTS
import VideoUploadThumbnail from "./VideoUploadThumnail/VideoUploadThumbnail";
import VideoUploadInputs from "./VideoUploadInputs/VideoUploadInputs";
import VideoUploadButtons from "./VideoUploadButtons/VideoUploadButtons";
import axios from "axios";
const VideoUploadForm = () => {
  const [vidTitle, setVidTitle] = useState("");
  const [vidDescription, setVidDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [titleErrorBorderClass, setTitleErrorBorderClass] = useState("");
  const [titleErrorMessageClass, setTitleErrorMessageClass] = useState("");
  const [descriptionErrorMessageClass, setDescriptionErrorMessageClass] =
    useState("");
  const [descriptionErrorBorderClass, setDescriptionErrorBorderClass] =
    useState("");

  // LOCAL-URL
  const localURL = process.env.REACT_APP_URL;
  // HANDLE INPUT VALUES
  const handleVideoTitle = (event) => {
    setVidTitle(event.target.value);
  };
  const handleVideoDescription = (event) => {
    setVidDescription(event.target.value);
  };
  const handleThumbnail = (event) => {
    setThumbnail(event.target.files[0]);
  };

  // HANDLE INPUT VALIDATION
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

  // HANDLE VIDEO UPLOAD/POST
  const handleVideoUpload = () => {
    const formData = new FormData(); // Creating new form data
    formData.append("thumbnail", thumbnail);
    formData.append("title", vidTitle);
    formData.append("description", vidDescription);

    axios
      .post(`${localURL}/videos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // TOGGLE UPLOAD BUTTON BACKGROUND
  const enableUploadButtonBackground = () => {
    if (vidTitle && vidDescription) {
      return "upload-button-enable-background-color";
    } else {
      return "";
    }
  };

  // TOGGLE BUTTON ENABLE
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
        <VideoUploadThumbnail
          thumbnail={thumbnail}
          handleThumbnail={handleThumbnail}
        />
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
        handleVideoUpload={handleVideoUpload}
      />
    </form>
  );
};
export default VideoUploadForm;
