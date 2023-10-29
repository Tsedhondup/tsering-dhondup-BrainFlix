// REACT-ROUTER-DOM
import { NavLink } from "react-router-dom";
// STYLE
import "./HeaderUpload.scss";
// ASSET
import uploadIcon from "../../../assets/images/upload.svg";
// COMPONENTS
// import VideoUploadPage from "../../../Page/VideoUploadPage/VideoUploadPage";

const HeaderUpload = () => {
  return (
    // <Link to={"/videoUploadPage"}>
    <div className="header-upload-btn-container">
      {/* UPLOAD BUTTON */}
      <button className="header-upload-btn-container__button">
        {/* UPLOAD LOGO */}
        <img
          className="header-upload-btn-container__button--icon"
          src={uploadIcon}
          alt="upload-icon"
        />
        upload
      </button>
    </div>
  );
};
export default HeaderUpload;
