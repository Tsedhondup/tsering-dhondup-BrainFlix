// HOOKS
import { useState, useRef } from "react";
import "./CurrentVideo.scss";
import CurrentVideoControls from "./CurrentVideoControls/CurrentVideoControls";
import axios from "axios";
let CurrentVideo = (props) => {
  // # STATES
  // props.currentVideo.forEach((item) => {
  //   console.log(item.image);
  // });
  // DYNAMIC CLASS FOR DISPLAYING CONTROLS
  const [videoControlClass, setVideoControlClass] = useState(
    "video-control-hidden"
  );
  const [currentTime, setCurrentTime] = useState("0:00");
  const [currentDuration, setCurrentDuration] = useState("0:00");
  const [progressBar, setProgressBar] = useState(0);
  const [viewAdded, setViewAdded] = useState(false); // to add only view on video play

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

  // PROGRESS BAR REF
  const progressBarRef = useRef();
  // POGRESS BAR ELEMENT

  /*-------------------------------------------------*/
  // # EVENT HANDLERS

  const handleTimeUpdate = (percentagewidth) => {
    // GET CURRENT DURATION
    const durationMinutes = Math.floor(currentVideoEl.duration / 60);
    const durationSeconds = Math.floor(
      currentVideoEl.duration - durationMinutes * 60
    );
    setCurrentDuration(`${durationMinutes}:${durationSeconds}`);
    const currentMinutes = Math.floor(currentVideoEl.currentTime / 60);
    const currentSeconds = Math.floor(
      currentVideoEl.currentTime - currentMinutes * 60
    );
    setCurrentTime(`${currentMinutes}:${currentSeconds}`);
  };

  // HANDLE PROGRESS BAR - SETTING WIDTH OF SCRUBBING BASE ON CHANGE IN CURRENT TIME OF VIDEO
  const handleProgressBar = () => {
    setProgressBar(
      (currentVideoEl.currentTime / currentVideoEl.duration) * 100
    );
  };
  // HANDLE PROGRESS BAR - SETTING WIDHT OF SCRUBBER WHEN CLICK ON SCRUBBER BAR
  const handleProgressBarOnClickScrubber = (event) => {
    const xCord = event.nativeEvent.offsetX;
    const eTargetWidth = event.target.offsetWidth;

    const timeProgress = (xCord / eTargetWidth) * currentVideoEl.duration;
    currentVideoEl.currentTime = timeProgress;
  };

  // SHOW VIDEO CONTROLS - HOVER ON VIDEO ELEMENT
  const handleVideoControlShow = () => {
    setVideoControlClass("video-control-show");
  };
  // HIDE VIDEO CONTROL - WHEN CURSOR LEAVE VIDEO ELEMENT
  const handleVideoControlHidden = () => {
    setVideoControlClass("video-control-hidden");
  };

  // HANDLE VIDEO PLAYING
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

  // HANLDE VIEWS
  const handleViews = () => {
    const localURL = process.env.REACT_APP_URL;
    axios
      .put(`${localURL}/videos/${props.currentVideo.id}/view`)
      .catch((err) => {
        console.log(err);
      });
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
              onTimeUpdate={() => {
                handleTimeUpdate();
                handleProgressBar();
              }}
              onPlaying={() => {
                setTimeout(() => {
                  if (viewAdded === false) {
                    handleViews();
                    setViewAdded(true);
                  }
                }, 4000);
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
              currentTime={currentTime}
              currentDuration={currentDuration}
              progressBar={progressBar}
              progressBarRef={progressBarRef}
              handleProgressBarOnClickScrubber={
                handleProgressBarOnClickScrubber
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
