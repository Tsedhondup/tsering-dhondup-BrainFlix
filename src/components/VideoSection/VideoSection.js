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
  // EXPRESS SERVER PORT
  const localURL = process.env.REACT_APP_URL;

  /*--------------------------------------------------*/

  // GET ID OF FIRST/CURRENT OF VIDEO
  const getVideoId = () => {
    axios.get(`${baseURL}/videos?api_key=${myApiKey}`).then((response) => {
      const firstVideoId = response.data[0].id;
      getDefaultVideo(firstVideoId); // get first video
    });
  };

  // GET FIRST VIDEO FROM THE SERVER get
  const getDefaultVideo = (videoId) => {
    if (videoId) {
      axios.get(`${localURL}/videos/${videoId}`).then((response) => {
        setMainVideo(response.data); // set the current-video
        setCurrentVidComments(response.data.comments); // set the comments
        setCurrentVidCommentCounts(response.data.comments.length); // set current-video comment counts
        setCurrentVidId(videoId); // set current-video id
      });
    }
  };
  // GET NEXT-VIDEOS
  const getNextVideos = () => {
    axios.get(`${localURL}/videos`).then((response) => {
      setNextVideos(response.data);
    });
  };

  /*--------------------------------------------------*/
  // USE-EFFECTS
  // DATA INITIALISATION FOR NEXT VIDEOS
  useEffect(() => {
    getNextVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GETTING ID OF FIRST VIDEO
  useEffect(() => {
    /*
     * ON REFRESHING, IT WILL CHECK THE PRESENCE OF VIDEO-ID useParams()
     * & RENDER THE PAGE BASE ON 'URL'
     */

    // to get first video from the list
    // invoke getVideoId() function which in turns invoke getDefault() with vidId as an argument
    if (!props.videoId) {
      getVideoId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.videoId]);

  // WHEN videoID PROPS CHANGED
  useEffect(() => {
    /*
    THIS IS TO ENSURE THE RENDERING OF STARTING HOME-PAGE 
    RESOURCE WITH '/' ROUTE CLICKING ON BROWSER BACK BUTTON 
    */

    // IF THE useParams() OBJECT IS EMPTY & HAS PATH "/", FIRST VIDEO FROM VIDEO-ARRAY WILL WILL GET RENDERED
    if (props.videoId) {
      getDefaultVideo(props.videoId);
    }
    // IF NOT CALL THE GET-VIDEO-ID FUNCTION WHICH IN TURNS INVOKED GET-DEFAULT VIDEO
    if (!props.videoId) {
      getVideoId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.videoId]);

  // /************************ RENDERING ************************/
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
            {/* API-KEY & BASE-URL WILL BE USE FOR POSTING COMMENTS */}
            <CurrentVidCommentAdd
              currentVidCommentCounts={currentVidCommentCounts}
              setCurrentVidCommentCounts={setCurrentVidCommentCounts}
              currentVidComments={currentVidComments}
              setCurrentVidComments={setCurrentVidComments}
              currentVidId={currentVidId}
              myApiKey={myApiKey}
              baseURL={baseURL}
            />
            {/* API-KEY & BASE-URL WILL BE USE FOR DELETING COMMENTS */}
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
