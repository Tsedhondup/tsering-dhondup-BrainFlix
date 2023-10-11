import "./HeaderUpload.scss";
import uploadIcon from "../../../assets/images/upload.svg";
let HeaderUpload = () => {
  return (
    <div className="header-upload-btn-container">
      <button className="header-upload-btn-container__button">
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
