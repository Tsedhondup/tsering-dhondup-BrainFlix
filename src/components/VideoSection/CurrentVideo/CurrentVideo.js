// HOOKS
import { useState, useRef } from "react";
import "./CurrentVideo.scss";
import CurrentVideoControls from "./CurrentVideoControls/CurrentVideoControls";
let CurrentVideo = (props) => {
  // # STATES

  // CLASSES FOR CURRENT-VIDEO TAG WILL BE DYNAMICALLY ADDED INTO VIDEO CUSTOM CONTROLS-CONTAINER
  const [videoControlClass, setVideoControlClass] = useState(
    "video-control-hidden"
  );

  /*-------------------------------------------------*/

  // # REFS

  // CREATING CURRENT-VIDEO-CONTAINER REF
  const currentVideoContainerRef = useRef();
  // GETTING CURRENT-VIDEO-CONTAINER FROM USING VIDEO-REF OBJECT
  const currentVideoContainerEl = currentVideoContainerRef.current;

  // CREATING CURRENT-VIDEO-CONTAINER REF
  const currentVideoRef = useRef();
  // GETTING CURRENT-VIDEO-CONTAINER FROM USING VIDEO-REF OBJECT
  const currentVideoEl = currentVideoRef.current;
  /*-------------------------------------------------*/

  // # EVENT HANDLERS

  // SHOW VIDEO CONTROLS - HOVER ON VIDEO ELEMENT
  const handleVideoControlShow = () => {
    setVideoControlClass("video-control-show");
  };
  // HIDE VIDEO CONTROL - WHEN CURSOR LEAVE VIDEO ELEMENT
  const handleVideoControlHidden = () => {
    setVideoControlClass("video-control-hidden");
  };

  // HANDLE VIDEO PLAY
  const handlePlayButton = () => {
    currentVideoEl.play();
  };
  const handlePauseButton = () => {
    currentVideoEl.pause();
  };

  // HANDLE VIDEO FULL-SCREEN
  const handleShowFullScreen = () => {
    currentVideoContainerEl.requestFullscreen();
  };
  const handleCloseFullScreen = () => {
    document.exitFullscreen();
  };

  // HANLDE SOUND
  const handleMuted = () => {
    currentVideoEl.muted = true;
  };
  const handleUnmuted = () => {
    currentVideoEl.muted = false;
  };

  return (
    <div className="current-video-wrapper-level-2">
      <div className="current-video-wrapper-level-1">
        <div className="current-video-wrapper-level-0">
          {/* WILL TAKE SCREEN UPON CLICKING FULL-SCREEN VIDEO CONTROL BUTTON */}
          <div
            ref={currentVideoContainerRef}
            className="current-video-wrapper-level-0__video-container"
          >
            <video
              ref={currentVideoRef}
              id={props.currentVideo.id}
              className="current-video-wrapper-level-0__video-container--video"
              poster={props.currentVideo.image}
              src={`${props.baseURL}/stream?api_key=${props.myApiKey}`}
              onMouseOver={(event) => {
                event.stopPropagation();
                handleVideoControlShow();
              }}
              onMouseOut={(event) => {
                event.stopPropagation();
                handleVideoControlHidden();
              }}
            ></video>
            {/* CURRENT VIDEO CONTROLS */}
            <CurrentVideoControls
              videoControlClass={videoControlClass}
              handleVideoControlHidden={handleVideoControlHidden}
              handleVideoControlShow={handleVideoControlShow}
              handlePlayButton={handlePlayButton}
              handlePauseButton={handlePauseButton}
              handleShowFullScreen={handleShowFullScreen}
              handleCloseFullScreen={handleCloseFullScreen}
              handleMuted={handleMuted}
              handleUnmuted={handleUnmuted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
