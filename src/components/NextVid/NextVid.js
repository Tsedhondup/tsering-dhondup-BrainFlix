import "./NextVid.scss";
// DATA
import VideoDataList from "../../data/videos.json";
// HOOK
import { useState } from "react";
// COMPONENTS
import NextVidImage from "./NextVidThumbnail/NextVidThumbnail";
import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidViews from "./NextVidViews/NextVidViews";

let NextVid = (props) => {
  // NEXT-VIDEO STATE
  const [nextVideoList, setNextVideoList] = useState(VideoDataList);
  // CREATING NEXT VIDEO-LIST
  const nextVideoListEl = nextVideoList
    .filter((video) => {
      return video.id !== props.currentVidDisplayId;
    })
    .map((videoFiltered) => (
      <div
        className="next-video"
        id={videoFiltered.id}
        key={videoFiltered.id}
        onClick={() => {
          // props.setVideoHandler(event);
          props.updateCurrentVidHandler(videoFiltered.id); // *** to changed soon
        }}
      >
        <div className="next-video__thumbnail-container">
          <NextVidImage image={videoFiltered.image} />
        </div>
        <div className="next-video__text-container">
          <NextVidTitle title={videoFiltered.title} />
          {/* CHANNEL & VIEWS CONTAINER */}
          <div className="next-video-channel-and-views-container">
            <NextVidChannel channel={videoFiltered.channel} />
            <NextVidViews id={videoFiltered.id} />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="next-video-container">
      <h3 className="next-video-container__header">next videos </h3>
      <div className="next-video-container__list">{nextVideoListEl}</div>
    </div>
  );
};

export default NextVid;
