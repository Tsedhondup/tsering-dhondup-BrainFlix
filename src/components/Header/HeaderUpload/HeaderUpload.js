// REACT-ROUTER-DOM
import { NavLink } from "react-router-dom";
// STYLE
import "./HeaderUpload.scss";
// ASSET
import uploadIcon from "../../../assets/images/upload.svg";
// COMPONENTS

const HeaderUpload = () => {
  return (
    <NavLink to="videoUploadPage">
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
    </NavLink>
  );
};
export default HeaderUpload;
