// STYLE
import "./VideoUploadInputs.scss";
const VideoUploadInputs = (props) => {
  return (
    <div className="form-input-container">
      {/* TITLE */}
      <label htmlFor="videot-title" className="form-input-container__label">
        title your video
      </label>
      <input
        id="video-title"
        className={`form-input-container__title ${props.titleErrorBorderClass}`}
        type="text"
        name="title"
        value={props.vidTitle}
        placeholder="Add a title to your video"
        onChange={(event) => {
          props.handleVideoTitle(event);
          props.handleTitleValidation(event);
          props.enableButton();
        }}
        onBlur={(event) => {
          props.handleTitleValidation(event);
        }}
      ></input>
      {/* ERROR MESSAGE */}
      <span
        className={`form-input-container__title-error-msg-hidden ${props.titleErrorMessageClass}`}
      >
        Title required!{`e.g - Trip to Hawaii/Summer Vlog `}
      </span>
      {/* DESCRIPTION */}
      <label
        htmlFor="videot-description"
        className="form-input-container__label"
      >
        add a video decription
      </label>
      <textarea
        id="video-descripton"
        className={`form-input-container__description ${props.descriptionErrorBorderClass}`}
        type="text"
        name="description"
        value={props.vidDescription}
        placeholder="Add a decription to your video"
        onChange={(event) => {
          props.handleVideoDescription(event);
          props.handleDescriptionValidation(event);
          props.enableButton();
        }}
        onBlur={(event) => {
          props.handleDescriptionValidation(event);
        }}
      ></textarea>
      {/* ERROR MESSAGE */}
      <span
        className={`form-input-container__description-error-msg-hidden ${props.descriptionErrorMessageClass}`}
      >
        Please add descriptions!
      </span>
    </div>
  );
};
export default VideoUploadInputs;
