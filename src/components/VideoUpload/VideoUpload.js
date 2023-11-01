import "./VideoUpload.scss";
// COMPONENTS
import VideoUploadHeader from "./Header/VideoUploadHeader";
import VideoUploadThumbnail from "./VideoUploadThumnail/VideoUploadThumbnail";
import VideoUploadForm from "./Form/VideoUploadForm";
import VideoUploadButtons from "./Buttons/VideoUploadButtons";
const VideoUpload = (props) => {
  return (
    <div>
      <VideoUploadHeader />
      <VideoUploadThumbnail />
      <VideoUploadForm />
      <VideoUploadButtons />
    </div>
  );
};
export default VideoUpload;
