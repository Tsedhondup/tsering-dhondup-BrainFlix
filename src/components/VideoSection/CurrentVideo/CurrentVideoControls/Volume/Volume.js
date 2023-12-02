import "./Volume.scss";
import volumeUp from "../../../../../assets/images/volume_up.svg";
import volumeOff from "../../../../../assets/images/volume_off.svg";
import { useState } from "react";
const Volume = (props) => {
  const [volumeOnBtnClass, setVolumenOnBtnClass] = useState("");
  const [volumeOffBtnClass, setVolumenOffBtnClass] = useState("");
  return (
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
  );
};
export default Volume;
