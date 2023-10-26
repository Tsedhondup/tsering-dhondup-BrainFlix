import "./VideoUploadThumbnail.scss";
import thumbnailImage from "../../../assets/images/Upload-video-preview.jpg";
const VideoUploadThumbnail = () => {
  return (
    <div>
      <h3>Video Thumbnail</h3>
      <img src={thumbnailImage} alt="img" />
    </div>
  );
};
export default VideoUploadThumbnail;
