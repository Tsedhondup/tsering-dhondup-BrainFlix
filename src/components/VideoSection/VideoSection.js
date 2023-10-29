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
  const [mainVideo, setMainVideo] = useState({});
  const [nextVideos, setNextVideos] = useState([]);

  // GET ID OF FIRST OF VIDEO
  const getVideoId = () => {
    axios.get(`${baseURL}/videos?api_key=${myApiKey}`).then((response) => {
      const firstVideoId = response.data[0].id;
      getDefaultVideo(firstVideoId);
    });
  };

  // GET DEFAULT VIDEO FROM THE SERVER
  const getDefaultVideo = (videoId) => {
    if (videoId) {
      axios
        .get(`${baseURL}/videos/${videoId}?api_key=${myApiKey}`)
        .then((response) => {
          setMainVideo(response.data);
        });
    }
  };
  // GET NEXT-VIDEOS
  const getNextVideos = () => {
    axios.get(`${baseURL}/videos?api_key=${myApiKey}`).then((response) => {
      setNextVideos(response.data);
    });
  };

  // DATA INITIALISATION
  useEffect(() => {
    getVideoId();
    getNextVideos();
  }, []);

  // WHEN PROPS CHANGED
  useEffect(() => {
    getDefaultVideo(props.videoId);
  }, [props.videoId]);

  /************************* EVENT HANDLERS ************************/

  // // UPDATE CURRENT-VIDEO OBJECT
  const handleMainVideo = () => {
    // PROPS FROM PARENT COMPONENT GENERATED VIA useParam() HOOK
    const clickedVideoId = props.videoId;
    getDefaultVideo(clickedVideoId);
  };

  // /************************* RENDERING ************************/
  if (mainVideo.id) {
    return (
      <section className="video-section">
        {/* VIDEO-SECTION PART-1 : CURRENT-VIDEO COMPONENT */}
        <CurrentVideo currentVideo={mainVideo} />
        {/* VIDEO-SECTION PART-2 : CURRENT-VIDEO-INFO & NEXT-VIDEO CONTAINER */}
        <div className="current-vid-info-and-next-vid-container">
          {/*
           * CONTAINS FOUR COMPONENTS
           * (A) CURRENT-VIDEO-INFO COMPONENT
           * (B) CURRENT-VIDEO-COMMENT-COUNT COMPONENT
           * (C) CURRENT-VIDEO-COMMENT-ADD COMPONENT
           * (D) CURRENT-VIDEO-COMMENT-LIST COMPONENT
           */}
          <div className="current-vid-info-container">
            {/*(A)*/}
            <CurrentVidInfo currentVideo={mainVideo} />
            {/*(B)*/}
            <CurrentVidCommentCount totalComment={mainVideo.comments.length} />
            {/*(C)*/}
            <CurrentVidCommentAdd currentVideo={mainVideo} />
            {/*(D)*/}
            <CurrentVidCommentList currentVideo={mainVideo} />
          </div>
          {/*----------------------------------------------*/}

          {/*
           * NEXT-VIDEO COMPONENT
           */}
          <NextVid
            nextVideos={nextVideos}
            currentVidId={mainVideo.id}
            // updateCurrentVidHandler={updateCurrentVidHandler}
            handleMainVideo={handleMainVideo}
          />
        </div>
      </section>
    );
  }
};
export default VideoSection;
