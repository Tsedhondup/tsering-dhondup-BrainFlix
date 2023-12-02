// STYLE
import "./CurrentVideoControls.scss";

// COMPONENTS
import PlayAndPause from "./PlayAndPause/PlayAndPause";
import ScrubberBar from "./ScrubberBar/ScrubberBar";
import TimeTrack from "./TimeTrack/TimeTrack";
import FullScreen from "./FullScreen/FullScreen";
import Volume from "./Volume/Volume";

let CurrentVideoControls = (props) => {
  return (
    <div
      className={`video-controls ${props.videoControlClass}`}
      onMouseOver={props.handleVideoControlShow}
      onMouseOut={props.handleVideoControlHidden}
    >
      {/*** PLAY AND PAUSE BUTTON SCONTAINER ***/}
      <PlayAndPause
        handlePlayButton={props.handlePlayButton}
        handlePauseButton={props.handlePauseButton}
      />

      {/*----------------------------------------------*/}
      {/***  SCRUBBING CONTROL AND TIME-LINE CONTAINER ***/}

      <div className="scrubbing-and-time-line-container">
        <ScrubberBar
          progressBarRef={props.progressBarRef}
          progressBar={props.progressBar}
        />

        {/* TIMELINE CONTAINER  */}
        <TimeTrack
          currentTime={props.currentTime}
          currentDuration={props.currentDuration}
        />
      </div>

      {/*----------------------------------------------*/}

      {/*** FULL SCREEN AND VOLUME CONTAINER ***/}
      <div className="full-screen-and-volume-container">
        {/* FULL-SCREEN BUTTONS CONTAINER */}
        <FullScreen
          handleShowFullScreen={props.handleShowFullScreen}
          handleCloseFullScreen={props.handleCloseFullScreen}
        />

        {/* VOLUMES BUTTONS  CONTAINER */}
        <Volume
          handleMuted={props.handleMuted}
          handleUnmuted={props.handleUnmuted}
        />
      </div>
    </div>
  );
};
export default CurrentVideoControls;
