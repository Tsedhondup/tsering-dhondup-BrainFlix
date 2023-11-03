// HOOKS
import { useState } from "react";
import "./CurrentVideo.scss";
import CurrentVideoControls from "./CurrentVideoControls/CurrentVideoControls";
let CurrentVideo = (props) => {
  const [videoControlClass, setVideoControlClass] = useState(
    "video-control-hidden"
  );
  // SHOW VIDEO CONTROLS - HOVER ON VIDEO ELEMENT
  const handleVideoControlShow = () => {
    setVideoControlClass("video-control-show");
  };
  // HIDE VIDEO CONTROL - WHEN CURSOR LEAVE VIDEO ELEMENT
  const handleVideoControlHidden = () => {
    setVideoControlClass("video-control-hidden");
  };
  return (
    /* 
    # WRAPPER LEVEL-2 : PURPOSES
    *
    * HAS WIDTH OF 100% OF VIEW-PORT
    * HAS BACKGROUND OF 'BRAIN-FLIX-DARK-BLACK' 
    * CONTAIN WRAPPER-LEVEL-1
    */
    <div className="current-video-wrapper-level-2">
      <div className="current-video-wrapper-level-1">
        <div className="current-video-wrapper-level-0">
          <video
            id={props.currentVideo.id}
            className="current-video-wrapper-level-0__video"
            poster={props.currentVideo.image}
            // src="https://project-2-api.herokuapp.com/stream?api_key=84e96018-4022-434e-80bf-000ce4cd12b8"
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
          />
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
