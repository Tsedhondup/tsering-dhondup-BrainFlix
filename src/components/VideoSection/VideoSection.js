// HOOK
import { useState } from "react";
// STYLES
import "./VideoSection.scss";
// DATAS
import videoDataDetail from "../../data/video-details.json";
// COMPONENTS
import CurrentVideo from "./CurrentVideo/CurrentVideo"; 
import NextVid from "./NextVid/NextVid";
import CurrentVidCommentCount from "./CurrentVidCommentCount/CurrentVidCommentCount";
import CurrentVidCommentAdd from "./CurrentVidCommentAdd/CurrentVidCommentAdd";
import CurrentVidInfo from "./CurrentVidInfo/CurrentVidInfo";
import CurrentVidCommentList from "./CurrentVidCommentList/CurrentVidCommentList";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videoDataDetail[0]); // **

  /************************* EVENT HANDLERS ************************/

  // // UPDATE CURRENT-VIDEO OBJECT
  const updateCurrentVidHandler = (id) => {
    const currentVideo = videoDataDetail.find((video) => {
      return video.id === id;
    });
    setCurrentVideo(currentVideo);
  };

  /************************* RENDERING ************************/
  return (
    <section className="video-section">
      {/* VIDEO-SECTION PART-1 : CURRENT-VIDEO COMPONENT */}
      <CurrentVideo currentVideo={currentVideo} />
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
          <CurrentVidInfo currentVideo={currentVideo} />
          {/*(B)*/}
          <CurrentVidCommentCount totalComment={currentVideo.comments.length} />
          {/*(C)*/}
          <CurrentVidCommentAdd currentVideo={currentVideo} />
          {/*(D)*/}
          <CurrentVidCommentList currentVideo={currentVideo} />
        </div>
        {/*----------------------------------------------*/}

        {/*
         * NEXT-VIDEO COMPONENT
         */}
        <NextVid
          currentVidId={currentVideo.id}
          updateCurrentVidHandler={updateCurrentVidHandler}
        />
      </div>
    </section>
  );
};
export default VideoSection;
