// REACT-ROUTE
import { NavLink } from "react-router-dom";
// STYLES
import "./VideoUploadButtons.scss";
// ASSETS
import uploadLogo from "../../../assets/images/add_comment.svg";
const VideoUploadButtons = (props) => {
  return (
    <div>
      {/* UPLOAD-LOGO */}
      <img className="page-img" src={uploadLogo} alt="upload-logo" />
      <NavLink to="/">
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("isUploadedClass", "isUploaded");
          }}
        >
          publish
        </button>
      </NavLink>
      <p>Cancel</p>
    </div>
  );
};
export default VideoUploadButtons;
