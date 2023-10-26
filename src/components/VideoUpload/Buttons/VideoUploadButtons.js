import "./VideoUploadButtons.scss";
import uploadLogo from "../../../assets/images/add_comment.svg";
const VideoUploadButtons = () => {
  return (
    <div>
      {/* UPLOAD-LOGO */}
      <img src={uploadLogo}/>
      <button type="button">publish</button>
    </div>
  );
};
export default VideoUploadButtons;
