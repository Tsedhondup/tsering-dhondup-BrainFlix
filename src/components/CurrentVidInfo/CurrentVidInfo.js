import "./CurrentVidInfo.scss";
import CurrentVidTitle from "./CurrentVidTitle/CurrentVidTitle";
import CurrentVidChannel from "./CurrentVidChannel/CurrentVidChannel";
import CurrentVidDate from "./CurrentVidDate/CurrentVidDate";
import CurrentVidViews from "./CurrentVidViews/CurrentVidViews";
import CurrentVidLikes from "./CurrentVidLikes/CurrentVidLikes";
import CurrentVidDescription from "./CurrentVidDescription/CurrentVidDescription";
import CurrentVideoMoment from "../CurrentVidInfo/CurrentVideoMoment/CurrentVideoMoment";
let CurrentVidInfo = (props) => {
  return (
    <div className="current-vid-info-container__info">
      {/* CURRENT-VIDEO TITLE */}
      <CurrentVidTitle title={props.currentVideo.title} />
      {/* DATE, CHANNEL, VIEWS, & LIKES CONTAINER */}
      <div className="current-vid-date-channel-viwe-like-container">
        {/* CHANNEL AND DATE CONTAINER */}
        <div className="current-vid-channel-and-date-container">
          <CurrentVidChannel channel={props.currentVideo.channel} />
          <CurrentVidDate date={props.date} />
        </div>
        {/* VIEWS AND LIKES CONTAINER */}
        <div className="current-vid-views-and-likes-container">
          <CurrentVidViews views={props.currentVideo.views} />
          <CurrentVidLikes likes={props.currentVideo.likes} />
        </div>
      </div>
      {/* MOMENTS - TIME ELAPSED SINCE CURRENT-VIDEO WAS UPLOADED */}
      <CurrentVideoMoment moment={props.moment} />
      {/* CURRENT-VIDEO DESCRIPTION */}
      <CurrentVidDescription description={props.currentVideo.description} />
    </div>
  );
};
export default CurrentVidInfo;
