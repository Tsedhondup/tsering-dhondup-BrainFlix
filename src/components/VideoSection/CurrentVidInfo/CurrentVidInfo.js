// HOOKS
import { useState } from "react";
// STYLES
import "./CurrentVidInfo.scss";
// COMPONENTS
import CurrentVidTitle from "./CurrentVidTitle/CurrentVidTitle";
import CurrentVidChannel from "./CurrentVidChannel/CurrentVidChannel";
import CurrentVidDate from "./CurrentVidDate/CurrentVidDate";
import CurrentVidViews from "./CurrentVidViews/CurrentVidViews";
import CurrentVidLikes from "./CurrentVidLikes/CurrentVidLikes";
import CurrentVidMoment from "./CurrentVidMoment/CurrentVidMoment";
import CurrentVidDescription from "./CurrentVidDescription/CurrentVidDescription";
import axios from "axios";

const CurrentVidInfo = (props) => {
  return (
    <div className="current-vid-info-container__info">
      {/* CURRENT-VIDEO TITLE */}
      <CurrentVidTitle title={props.currentVideo.title} />

      {/* DATE, CHANNEL, VIEWS, & LIKES CONTAINER */}
      <div className="current-vid-date-channel-viwe-like-container">
        {/* CHANNEL AND DATE CONTAINER */}
        <div className="current-vid-channel-and-date-container">
          <CurrentVidChannel channel={props.currentVideo.channel} />
          <CurrentVidDate currentVideo={props.currentVideo} />
        </div>
        {/* VIEWS AND LIKES CONTAINER */}
        <div className="current-vid-views-and-likes-container">
          <CurrentVidViews views={props.currentVideo.views} />
          <CurrentVidLikes currentVideo={props.currentVideo} />
        </div>
      </div>

      {/* CURRENT-VIDEO DESCRIPTION */}
      <CurrentVidDescription description={props.currentVideo.description} />
      {/* MOMENTS - TIME ELAPSED SINCE CURRENT-VIDEO WAS UPLOADED */}
      <CurrentVidMoment timestamp={props.currentVideo.timestamp} />
    </div>
  );
};
export default CurrentVidInfo;
