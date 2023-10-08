import { useState } from "react";
import data from "../../data/video-details.json";
import CurrentVid from "../CurrentVid/CurrentVid";
import StateNextVid from "./StateNextVid";

let StateCurrentVid = (props) => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  // CURRENT-VIDEO STATE HANDLER FUNCTION
  const currentVidHandler = (props) => {
    console.log(props.event);
    // setCurrentVideo(vidObject);
  };
  const currentVideoId = currentVideo.id;
  // PASSING CURRENT-VIDEO ID TO NEXT-VDIEO-STATE
  <StateNextVid currentVideoId={currentVideoId} />;

  return (
    <CurrentVid
      currentVideo={currentVideo}
      currentVidHandler={currentVidHandler}
    />
  );
};

export default StateCurrentVid;
