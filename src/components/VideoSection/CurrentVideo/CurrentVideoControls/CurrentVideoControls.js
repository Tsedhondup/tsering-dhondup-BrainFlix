// HOOKS
import { useState, useRef } from "react";
// STYLE
import "./CurrentVideoControls.scss";
// ASSETS
import fullScreen from "../../../../assets/images/fullscreen.svg";
import closeFullScreen from "../../../../assets/images/close_fullscreen.svg";
import pause from "../../../../assets/images/pause.svg";
import play from "../../../../assets/images/play.svg";
import scrub from "../../../../assets/images/scrub.svg";
import volumeUp from "../../../../assets/images/volume_up.svg";
import volumeOff from "../../../../assets/images/volume_off.svg";

let CurrentVideoControls = (props) => {
  // STATES
  const [playBtnClass, setPlayBtnClass] = useState("");
  const [pauseBtnClass, setPauseBtnClass] = useState("");
  const [openFullScreenBtnClass, setOpenFullScreenBtnClass] = useState("");
  const [closeFullScreenBtnClass, setCloseFullScreenBtnClass] = useState("");
  const [volumeOnBtnClass, setVolumenOnBtnClass] = useState("");
  const [volumeOffBtnClass, setVolumenOffBtnClass] = useState("");

  return (
    <div
      className={`video-controls ${props.videoControlClass}`}
      onMouseOver={props.handleVideoControlShow}
      onMouseOut={props.handleVideoControlHidden}
    >
      {/* PLAY AND PAUSE BUTTON SCONTAINER */}
      <div className="video-controls__play-puase-btn-container">
        {/* PLAY */}
        <button
          className={`video-controls__play-puase-btn-container--play ${playBtnClass}`}
          onClick={() => {
            props.handlePlayButton();
            setPlayBtnClass(
              "video-controls__play-puase-btn-container--play-hidden" // hide play button
            );
            setPauseBtnClass(
              "video-controls__play-puase-btn-container--pause-show" // show pause button
            );
          }}
        >
          <img src={play} alt="play" />
        </button>
        {/* PAUSE */}
        <button
          className={`video-controls__play-puase-btn-container--pause ${pauseBtnClass}`}
          onClick={() => {
            props.handlePauseButton();
            setPlayBtnClass(""); // show play button
            setPauseBtnClass(""); // hide pause button
          }}
        >
          <img src={pause} alt="pause" />
        </button>
      </div>
      {/*----------------------------------------------*/}

      {/* SCRUBBING-CONTROL CONTAINER  */}
      <div className="video-controls__scrub">
        <input className="video-controls__scrub--range" type="range"></input>
        <img
          className="video-controls__scrub--scrub-icon"
          src={scrub}
          alt="scrub"
        />
      </div>
      {/*----------------------------------------------*/}

      {/* FULL SCREEN AND VOLUME CONTAINER */}
      <div className="full-screen-and-volume-container">
        {/* FULL-SCREEN BUTTONS CONTAINER */}
        <div className="full-screen-and-volume-container__full-screen">
          {/* OPEN FULL-SCREEN  */}
          <button
            className={`full-screen-and-volume-container__full-screen--open ${openFullScreenBtnClass}`}
            onClick={() => {
              props.handleShowFullScreen();
              setOpenFullScreenBtnClass(
                "full-screen-and-volume-container__full-screen--open-hidden" // hide open full-screen button
              );
              setCloseFullScreenBtnClass(
                "full-screen-and-volume-container__full-screen--close-show" // show close full-screen buttons
              );
            }}
          >
            <img src={fullScreen} alt="full screen" />
          </button>
          {/* CLOSE FULL-SCREEN  */}
          <button
            className={`full-screen-and-volume-container__full-screen--close ${closeFullScreenBtnClass}`}
            onClick={() => {
              props.handleCloseFullScreen();
              setOpenFullScreenBtnClass(""); // show open full-screen button
              setCloseFullScreenBtnClass(""); // hide close full-screen button
            }}
          >
            <img src={closeFullScreen} alt=" exit fullscreen" />
          </button>
        </div>
        {/* VOLUMES BUTTONS  CONTAINER */}
        <div className="full-screen-and-volume-container__volume">
          <button
            className={`full-screen-and-volume-container__volume--on ${volumeOnBtnClass}`}
            onClick={() => {
              props.handleMuted();
              setVolumenOnBtnClass(
                "full-screen-and-volume-container__volume--on-hidden" // hide volume-on button
              );
              setVolumenOffBtnClass(
                "full-screen-and-volume-container__volume--off-show" // show volume-off button
              );
            }}
          >
            <img src={volumeUp} alt="volume up" />
          </button>
          <button
            className={`full-screen-and-volume-container__volume--off ${volumeOffBtnClass}`}
            onClick={() => {
              props.handleUnmuted();
              setVolumenOnBtnClass(""); // show volume-on button
              setVolumenOffBtnClass(""); // hide volume-off button
            }}
          >
            <img src={volumeOff} alt="volume off" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideoControls;
