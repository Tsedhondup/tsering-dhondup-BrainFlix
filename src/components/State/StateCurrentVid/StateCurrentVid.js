import { useState } from "react";
import data from "../../../data/video-details.json";
import CurrentVid from "../../CurrentVid/CurrentVid";

let StateCurrentVid = () => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  return <CurrentVid currentVideo={currentVideo} />;
};

export default StateCurrentVid;
