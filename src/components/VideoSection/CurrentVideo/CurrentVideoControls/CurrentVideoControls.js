// HOOKS
import { useState, useRef } from "react";
// STYLE
import "./CurrentVideoControls.scss";
// ASSETS
import fullScreen from "../../../../assets/images/fullscreen.svg";
// import closeFullScreen from "../../../../assets/images/close_fullscreen.svg";
// import pause from "../../../../assets/images/pause.svg";
import play from "../../../../assets/images/play.svg";
import scrub from "../../../../assets/images/scrub.svg";
import volumeUp from "../../../../assets/images/volume_up.svg";
// import volumeOff from "../../../../assets/images/volume_off.svg";

let CurrentVideoControls = (props) => {
  return (
    <div
      className={`video-controls ${props.videoControlClass}`}
      onMouseOver={props.handleVideoControlShow}
      onMouseOut={props.handleVideoControlHidden}
    >
      <button>
        <img src={play} alt="play" />
      </button>
      {/* SCRUBBING CONTROLS */}
      <div className="video-controls__scrub">
        <input className="video-controls__scrub--range" type="range"></input>
        {/* SCRUBBING ICONS */}
        <img
          className="video-controls__scrub--scrub-icon"
          src={scrub}
          alt="scrub"
        />
      </div>
      {/* FULL SCREEN AND VOLUME CONTAINER */}
      <div className="full-screen-and-volume">
        <button>
          <img src={fullScreen} alt="full screen" />
        </button>
        <button>
          <img src={volumeUp} alt="volume up" />
        </button>
      </div>
    </div>
  );
};
export default CurrentVideoControls;
