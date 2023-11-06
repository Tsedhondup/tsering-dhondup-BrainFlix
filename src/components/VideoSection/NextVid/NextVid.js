// STYLES
import "./NextVid.scss";

// REACT ROUTER
import { NavLink } from "react-router-dom";
// COMPONENTS
import NextVidThumbnail from "./NextVidThumbnail/NextVidThumbnail";
import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidViews from "./NextVidViews/NextVidViews";

const NextVid = (props) => {
  // CREATING NEXT VIDEO-LIST
  const nextVideoListEl = props.nextVideos
    .filter((video) => {
      return video.id !== props.currentVidId;
    })
    .map((videoFiltered) => (
      // NEXT-VIDEO-LIST
      <NavLink
        to={`/${videoFiltered.id}`}
        className="next-video"
        id={videoFiltered.id}
        key={videoFiltered.id}
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
            <NextVidViews id={videoFiltered.id} />
          </div>
        </div>
      </NavLink>
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
