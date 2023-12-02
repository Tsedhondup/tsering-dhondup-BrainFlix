import "./FullScreen.scss";
import fullScreen from "../../../../../assets/images/fullscreen.svg";
import closeFullScreen from "../../../../../assets/images/close_fullscreen.svg";
import { useState } from "react";
const FullScreen = (props) => {
  const [openFullScreenBtnClass, setOpenFullScreenBtnClass] = useState("");
  const [closeFullScreenBtnClass, setCloseFullScreenBtnClass] = useState("");
  return (
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
  );
};
export default FullScreen;
