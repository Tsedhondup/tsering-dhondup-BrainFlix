// STYLE
import "./VideoUploadInputs.scss";
const VideoUploadInputs = (props) => {
  return (
    <div>
      {/* TITLE */}
      <label htmlFor="videot-title">title your video</label>
      <input
        id="video-title"
        type="text"
        name="title"
        value={props.vidTitle}
        placeholder="add a title to your video"
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
      <span className={`input-error ${props.titleErrorMessageClass}`}>
        Title required!{`e.g - Trip to Hawaii/Summer Vlog `}
      </span>
      {/* DESCRIPTION */}
      <label htmlFor="videot-description">add a video decription</label>
      <textarea
        id="video-descripton"
        type="text"
        name="description"
        value={props.vidDescription}
        placeholder="add a decription to your video"
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
      <span className={`input-error ${props.descriptionErrorMessageClass}`}>
        Please add descriptions!
      </span>
    </div>
  );
};
export default VideoUploadInputs;
