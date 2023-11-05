// REACT-ROUTE
import { NavLink } from "react-router-dom";
// STYLES
import "./VideoUploadButtons.scss";
// ASSETS
import uploadLogo from "../../../../assets/images/add_comment.svg";
const VideoUploadButtons = (props) => {
  return (
    // BUTTON CONTAINER
    <div className="video-upload-btn-container">
      {/* BUTTON */}
      <NavLink to="/">
        <button
          className={`video-upload-btn-container__upload-button ${props.enableUploadButtonBackground()}`}
          type="submit"
          onClick={(event) => {
            sessionStorage.setItem("uploadedClassName", "video-uploaded");
          }}
          disabled={!props.enableButton()}
        >
          {/* VIDEO-UPLOAD LOGO */}
          <img
            className="video-upload-btn-container__upload-button--icon"
            src={uploadLogo}
            alt="upload-icon"
          />
          publish
        </button>
      </NavLink>
      <button className="video-upload-btn-container__cancel-button">
        Cancel
      </button>
    </div>
    // --------------------------------------
    // <div>
    //   {/* UPLOAD-LOGO */}
    //   <img className="page-img" src={uploadLogo} alt="upload-logo" />
    //   <NavLink to="/">
    //     <button
    //       type="submit"
    //       onClick={(event) => {
    //         sessionStorage.setItem("uploadedClassName", "video-uploaded");
    //       }}
    //       disabled={!props.enableButton()}
    //     >
    //       publish
    //     </button>
    //   </NavLink>
    //   <p>Cancel</p>
    // </div>
  );
};
export default VideoUploadButtons;
