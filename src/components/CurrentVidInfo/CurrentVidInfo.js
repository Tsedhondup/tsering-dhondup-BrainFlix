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
    <div>
      <CurrentVidTitle title={props.currentVideo.title} />
      <CurrentVidChannel channel={props.currentVideo.channel} />
      <CurrentVidDate date={props.date} />
      <CurrentVidViews views={props.currentVideo.views} />
      <CurrentVidLikes likes={props.currentVideo.likes} />
      <CurrentVideoMoment moment={props.moment} />
      <CurrentVidDescription description={props.currentVideo.description} />
    </div>
  );
};
export default CurrentVidInfo;
