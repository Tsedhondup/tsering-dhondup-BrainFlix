import "./VideoUploadThumbnail.scss";
import thumbnailImage from "../../../assets/images/Upload-video-preview.jpg";
const VideoUploadThumbnail = () => {
  return (
    <div className="video-upload-container__thumbnail-container">
      <h3 className="video-upload-container__thumbnail-container--header">
        Video Thumbnail
      </h3>
      <img
        className="video-upload-container__thumbnail-container--image"
        src={thumbnailImage}
        alt="img"
      />
    </div>
  );
};
export default VideoUploadThumbnail;
// 0f0b768a-4383-4dcf-8eb8-5b39a3638df6
