// DATA
import VideoDataList from "../../data/videos.json";
// HOOK
import { useState } from "react";
// COMPONENTS
import NextVidHeader from "./NextVidHeader/NextVidHeader";
import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidImage from "./NextVidImagel/NextVidImage";

let NextVid = (props) => {
  // NEXT-VIDEO STATE
  const [nextVideoList, setNextVideoList] = useState(VideoDataList);
  // CREATING NEXT VIDEO-LIST***
  const nextVideoListEl = nextVideoList
    .filter((video) => {
      return video.id !== props.currentVidDisplayId;
    })
    .map((videoFiltered) => (
      <div
        className="next-video-container__next-video"
        id={videoFiltered.id}
        key={videoFiltered.id}
        onClick={() => {
          // props.setVideoHandler(event);
          props.updateCurrentVidHandler(videoFiltered.id); // *** to changed soon
        }}
      >
        <div className="next-video-img-container">
          <NextVidImage image={videoFiltered.image} />
        </div>
        <div className="next-video-text-container">
          <NextVidTitle title={videoFiltered.title} />
          <NextVidChannel channel={videoFiltered.channel} />
        </div>
      </div>
    ));

  return (
    <div className="next-video-container">
      <NextVidHeader />
      {nextVideoListEl}
    </div>
  );
};

export default NextVid;
