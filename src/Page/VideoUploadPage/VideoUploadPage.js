import VideoUploadHeader from "../../components/VideoUpload/Header/VideoUploadHeader";
import VideoUploadThumbnail from "../../components/VideoUpload/VideoUploadThumnail/VideoUploadThumbnail";
import VideoUploadForm from "../../components/VideoUpload/Form/VideoUploadForm";
import VideoUploadButtons from "../../components/VideoUpload/Buttons/VideoUploadButtons";
const VideoUploadPage = () => {
  return (
    <div>
      <p>this is upload page</p>
      <VideoUploadHeader />
      <VideoUploadThumbnail />
      <VideoUploadForm />
      <VideoUploadButtons />
    </div>
  );
};
export default VideoUploadPage;
