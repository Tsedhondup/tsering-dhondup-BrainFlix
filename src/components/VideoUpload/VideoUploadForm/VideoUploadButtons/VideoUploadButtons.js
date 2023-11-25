// REACT-ROUTE
import { NavLink } from "react-router-dom";
// STYLES
import "./VideoUploadButtons.scss";
// ASSETS
import uploadLogo from "../../../../assets/images/publish.svg";
const VideoUploadButtons = (props) => {
  return (
    // BUTTON CONTAINER
    <div className="video-upload-btn-container">
      {/* BUTTON */}
      <NavLink to="/" className="video-upload-btn-container__nav-link">
        <button
          className={`upload-button ${props.enableUploadButtonBackground()}`}
          type="submit"
          onClick={() => {
            props.handleVideoUpload();
          }}
          disabled={!props.enableButton()}
        >
          {/* VIDEO-UPLOAD LOGO */}
          <img
            className="upload-button__icon"
            src={uploadLogo}
            alt="upload-icon"
          />
          publish
        </button>
      </NavLink>
      {/* CANCEL BUTTON */}
      <button
        className="video-upload-btn-container__cancel-button"
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};
export default VideoUploadButtons;
