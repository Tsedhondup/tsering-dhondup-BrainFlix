import "./VideoUploadButtons.scss";
import uploadLogo from "../../../assets/images/add_comment.svg";
const VideoUploadButtons = () => {
  return (
    <div>
      {/* UPLOAD-LOGO */}
      <img className="page-img" src={uploadLogo} alt="upload-logo"/>
      <button type="button">publish</button>
    </div>
  );
};
export default VideoUploadButtons;
