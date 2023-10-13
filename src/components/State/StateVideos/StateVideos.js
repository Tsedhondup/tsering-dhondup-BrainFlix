// HOOK
import { useState } from "react";
// DATAS
import videoDataDetail from "../../../data/video-details.json";
// COMPONENTS
import CurrentVideo from "../../CurrentVideo/CurrentVideo";
import NextVid from "../../NextVid/NextVid";
import CurrentVidCommentCount from "../../CurrentVidCommentCount/CurrentVidCommentCount";
import CurrentVidCommentAdd from "../../CurrentVidCommentAdd/CurrentVidCommentAdd";
import CurrentVidInfo from "../../CurrentVidInfo/CurrentVidInfo";
import CurrentVidCommentList from "../../CurrentVidCommentList/CurrentVidCommentList";
// STYLES
import "./StateVideos.scss";

let StateVideos = () => {
  const [currentVideo, setCurrentVidDisplay] = useState(videoDataDetail[0]); // **

  /************************* EVENT HANDLERS ************************/

  // // UPDATE CURRENT-VIDEO OBJECT
  const updateCurrentVidHandler = (id) => {
    const currentVidDisplay = videoDataDetail.find((video) => {
      return video.id === id;
    });
    setCurrentVidDisplay(currentVidDisplay);
  };

  /************************* RENDERING ************************/
  return (
    <section className="video-section">
      {/* VIDEO-SECTION PART-1 : CURRENT-VIDEO-DISPLAY COMPONENT */}
      <CurrentVideo currentVideo={currentVideo} />
      {/* VIDEO-SECTION PART-2 : CURRENT-VIDEO-INFO & NEXT-VIDEO CONTAINER */}
      <div className="current-vid-info-and-next-vid-container">
        {/* # PART-2 : (A) */}
        <div className="current-vid-info-container">
          {/* 
          # CONTAINS FOUR COMPONENTS
           (A) CURRENT-VIDEO-INFO COMPONENT
           (B) CURRENT-VIDEO-COMMENT-COUNT COMPONENT
           (C) CURRENT-VIDEO-COMMENT-ADD COMPONENT
           (D) CURRENT-VIDEO-COMMENT-LIST COMPONENT
        */}
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
        {/* # PART-2 : (B) */}
        {/*
            # NEXT-VIDEO-LISTS 
          - CURRENT-VIDEO-ID IS ALSO PASSED
          - REASON - TO DIRECT OR FOCUS PAGE TO CURRENT-VIDEO DISPLAY WHEN
          CLICKED ON NEXT-VIDEO LIST
          */}
        <NextVid
          currentVidDisplayId={currentVideo.id}
          updateCurrentVidHandler={updateCurrentVidHandler}
        />
      </div>
    </section>
  );
};
export default StateVideos;
