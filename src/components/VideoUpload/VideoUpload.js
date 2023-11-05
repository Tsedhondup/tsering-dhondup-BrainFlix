import "./VideoUpload.scss";
// COMPONENTS
import VideoUploadHeader from "./VideoUploadHeader/VideoUploadHeader";
import VideoUploadForm from "./VideoUploadForm/VideoUploadForm";
const VideoUpload = (props) => {
  return (
    <div className="video-upload-container">
      <VideoUploadHeader />
      <VideoUploadForm />
    </div>
  );
};
export default VideoUpload;
