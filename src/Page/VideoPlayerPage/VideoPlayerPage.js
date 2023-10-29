// HOOKS
import { useParams } from "react-router-dom";
//COMPONENTS
import VideoSection from "../../components/VideoSection/VideoSection";
// STYLES
import "./VideoPlayerPage.scss";
const VideoPlayerPage = () => {
  const { videoId } = useParams();
  return <VideoSection videoId={videoId} />;
};
export default VideoPlayerPage;
