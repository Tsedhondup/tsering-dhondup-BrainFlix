// HOOKS
import { useParams } from "react-router-dom";
//COMPONENTS
import VideoSection from "../../components/VideoSection/VideoSection";
import ConfirmVidUploadMessage from "../../components/ConfirmVidUploadMessage/ConfirmVidUploadMessage";
// STYLES
import "./VideoPlayerPage.scss";
const VideoPlayerPage = () => {
  const { videoId } = useParams();

  return (
    <div>
      <ConfirmVidUploadMessage />
      <VideoSection videoId={videoId} />;
    </div>
  );
};
export default VideoPlayerPage;
