import { useState } from "react";
import data from "../../data/video-details.json";
import CurrentVid from "../CurrentVid/CurrentVid";

let StateCurrentVid = () => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  // CURRENT-VIDEO STATE HANDLER FUNCTION
  const currentVidHandler = (vidObject) => {
    setCurrentVideo(vidObject);
  };
  return (
    <CurrentVid
      currentVideo={currentVideo}
      currentVidHandler={currentVidHandler}
    />
  );
};

export default StateCurrentVid;
