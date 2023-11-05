// HOOK
import { useState, useEffect } from "react";
// STYLES
import "./VideoSection.scss";
// APIs
import { myApiKey, baseURL } from "../../utilities/APIs";
// COMPONENTS
import CurrentVideo from "./CurrentVideo/CurrentVideo";
import NextVid from "./NextVid/NextVid";
import CurrentVidCommentCount from "./CurrentVidCommentCount/CurrentVidCommentCount";
import CurrentVidCommentAdd from "./CurrentVidCommentAdd/CurrentVidCommentAdd";
import CurrentVidInfo from "./CurrentVidInfo/CurrentVidInfo";
import CurrentVidCommentList from "./CurrentVidCommentList/CurrentVidCommentList";
import axios from "axios";

const VideoSection = (props) => {
  const [currentVideo, setMainVideo] = useState({});
  const [currentVidId, setCurrentVidId] = useState("");
  const [nextVideos, setNextVideos] = useState([]);
  const [currentVidComments, setCurrentVidComments] = useState("");
  const [currentVidCommentCounts, setCurrentVidCommentCounts] = useState("");

  /*--------------------------------------------------*/

  // GET ID OF FIRST/CURRENT OF VIDEO
  const getVideoId = () => {
    axios.get(`${baseURL}/videos?api_key=${myApiKey}`).then((response) => {
      const firstVideoId = response.data[0].id;
      getDefaultVideo(firstVideoId); // get first video
    });
  };

  // GET FIRST VIDEO FROM THE SERVER
  const getDefaultVideo = (videoId) => {
    if (videoId) {
      axios
        .get(`${baseURL}/videos/${videoId}?api_key=${myApiKey}`)
        .then((response) => {
          setMainVideo(response.data); // set the current-video
          setCurrentVidComments(response.data.comments); // set the comments
          setCurrentVidCommentCounts(response.data.comments.length); // set current-video comment counts
          setCurrentVidId(videoId); // set current-video id
        });
    }
  };
  // GET NEXT-VIDEOS
  const getNextVideos = () => {
    axios.get(`${baseURL}/videos?api_key=${myApiKey}`).then((response) => {
      setNextVideos(response.data);
    });
  };

  /*--------------------------------------------------*/
  // USE-EFFECTS
  // DATA INITIALISATION FOR NEXT VIDEOS
  useEffect(() => {
    getNextVideos();
  }, []);

  // GETTING ID OF FIRST VIDEO
  useEffect(() => {
    /*
     * ON REFRESHING, IT WILL VALIDATE THE PRESENCE OF VIDEO-ID useParams()
     * RENDER THE APPROPRIATE PAGE BASE ON 'URL'
     */
    if (!props.videoId) {
      getVideoId();
    }
  }, []);

  // WHEN videoID PROPS CHANGED
  useEffect(() => {
    getDefaultVideo(props.videoId);
  }, [props.videoId]);

  // /************************* RENDERING ************************/
  if (currentVideo.id) {
    return (
      <section className="video-section">
        {/* VIDEO-SECTION PART-1 : CURRENT-VIDEO COMPONENT */}
        <CurrentVideo
          currentVideo={currentVideo}
          myApiKey={myApiKey}
          baseURL={baseURL}
        />
        {/* VIDEO-SECTION PART-2 : CURRENT-VIDEO-INFO & NEXT-VIDEO CONTAINER */}
        <div className="current-vid-info-and-next-vid-container">
          <div className="current-vid-info-container">
            <CurrentVidInfo currentVideo={currentVideo} />
            <CurrentVidCommentCount
              totalComment={currentVideo.comments.length}
              currentVidCommentCounts={currentVidCommentCounts}
            />
            {/* PROPS WILL BE USE FOR POSTING COMMENTS */}
            <CurrentVidCommentAdd
              currentVidCommentCounts={currentVidCommentCounts}
              setCurrentVidCommentCounts={setCurrentVidCommentCounts}
              currentVidComments={currentVidComments}
              setCurrentVidComments={setCurrentVidComments}
              currentVidId={currentVidId}
              myApiKey={myApiKey}
              baseURL={baseURL}
            />
            {/* PROPS WILL BE USE FOR DELETING COMMENTS */}
            <CurrentVidCommentList
              currentVidComments={currentVidComments}
              setCurrentVidComments={setCurrentVidComments}
              currentVidCommentCounts={currentVidCommentCounts}
              setCurrentVidCommentCounts={setCurrentVidCommentCounts}
              currentVidId={currentVidId}
              myApiKey={myApiKey}
              baseURL={baseURL}
            />
          </div>
          {/*----------------------------------------------*/}

          <NextVid nextVideos={nextVideos} currentVidId={currentVideo.id} />
        </div>
      </section>
    );
  }
};
export default VideoSection;
