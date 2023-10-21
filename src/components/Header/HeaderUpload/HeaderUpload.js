// STYLE
import "./HeaderUpload.scss";
// ASSET
import uploadIcon from "../../../assets/images/upload.svg";

const HeaderUpload = () => {
  return (
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
