import "./VideoUpload.scss";
// COMPONENTS
import VideoUploadHeader from "./VideoUploadHeader/VideoUploadHeader";
import VideoUploadThumbnail from "./VideoUploadThumnail/VideoUploadThumbnail";
import VideoUploadForm from "./VideoUploadForm/VideoUploadForm";
const VideoUpload = (props) => {
  // HANDEL FORM SUBMISSION
  return (
    <div className="video-upload-container">
      <VideoUploadHeader />
      <VideoUploadThumbnail />
      <VideoUploadForm />
    </div>
  );
};
export default VideoUpload;
