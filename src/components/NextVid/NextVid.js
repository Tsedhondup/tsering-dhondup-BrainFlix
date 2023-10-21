// STYLES
import "./NextVid.scss";
// DATA
import VideoDataList from "../../data/videos.json";
// HOOK
import { useState } from "react";
// COMPONENTS
import NextVidThumbnail from "./NextVidThumbnail/NextVidThumbnail";
import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidViews from "./NextVidViews/NextVidViews";

const NextVid = (props) => {
  // NEXT-VIDEO STATE
  const [nextVideoList, setNextVideoList] = useState(VideoDataList);

  // CREATING NEXT VIDEO-LIST
  const nextVideoListEl = nextVideoList
    .filter((video) => {
      return video.id !== props.currentVidId;
    })
    .map((videoFiltered) => (
      // NEXT-VIDEO-LIST
      <div
        className="next-video"
        id={videoFiltered.id}
        key={videoFiltered.id}
        onClick={() => {
          // UPDATES CURRENT-VIDEO FROM STATE-VIDEOS COMPONENT
          props.updateCurrentVidHandler(videoFiltered.id);
        }}
      >
        {/* THUMBNAIL-CONTAINER */}
        <div className="next-video__thumbnail-container">
          <NextVidThumbnail image={videoFiltered.image} />
        </div>
        {/* TEXT-CONTAINER */}
        <div className="next-video__text-container">
          <NextVidTitle title={videoFiltered.title} />
          {/* CHANNEL & VIEWS CONTAINER */}
          <div className="next-video-channel-and-views-container">
            <NextVidChannel channel={videoFiltered.channel} />
            {/*
             * ID OF CURRENT-INSTANCE OF NEXT-VIDEO IS BEING PASSED AS A PROPS
             *
             * REASON***
             * ID WILL BE USE TO FILTER THE VIDEO-DETAIL-JSON FILE IN
             * NEXT-VID-VIEWS COMPONENT &&
             * GET THE TOTAL VIEW OF VIDEO WITH THE MATCHED ID
             */}
            <NextVidViews id={videoFiltered.id} />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="next-video-container">
      {/* NEXT-VIDEO HEADER */}
      <h3 className="next-video-container__header">next videos </h3>
      {/* NEXT-VIDEO-LISTS */}
      <div className="next-video-container__list">{nextVideoListEl}</div>
    </div>
  );
};

export default NextVid;
