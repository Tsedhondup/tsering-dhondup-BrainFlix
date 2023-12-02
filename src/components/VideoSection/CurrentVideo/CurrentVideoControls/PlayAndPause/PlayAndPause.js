import { useState } from "react";
import "./PlayAndPause.scss";
import pause from "../../../../../assets/images/pause.svg";
import play from "../../../../../assets/images/play.svg";
const PlayAndPause = (props) => {
  const [playBtnClass, setPlayBtnClass] = useState("");
  const [pauseBtnClass, setPauseBtnClass] = useState("");
  return (
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
  );
};
export default PlayAndPause;
